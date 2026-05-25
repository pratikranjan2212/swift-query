(function() {
  const currentHost = window.location.hostname;
  
  // Map hostname key to our engine name
  let engineKey = '';
  if (currentHost.includes('chatgpt.com')) {
    engineKey = 'chatgpt';
  } else if (currentHost.includes('gemini.google.com')) {
    engineKey = 'gemini';
  } else if (currentHost.includes('claude.ai')) {
    engineKey = 'claude';
  } else if (currentHost.includes('perplexity.ai')) {
    engineKey = 'perplexity';
  }

  if (!engineKey) return;

  // Read storage to check for pending queries
  chrome.storage.local.get([
    'pendingQuery',
    'pendingEngine',
    'pendingTimestamp',
    'autoSubmit'
  ], (data) => {
    const { pendingQuery, pendingEngine, pendingTimestamp, autoSubmit } = data;
    
    // Check if there is a valid query for this engine, set within the last 15 seconds
    if (!pendingQuery || pendingEngine !== engineKey) return;
    if (!pendingTimestamp || Date.now() - pendingTimestamp > 15000) return;

    // Found a valid query! We will clear it ONLY when we successfully inject or timeout
    console.log(`SwiftQuery: Injecting query into ${engineKey}...`);
    executeInjection(pendingQuery, autoSubmit, engineKey);
  });

  function executeInjection(query, autoSubmit, engine) {
    let attempts = 0;
    const maxAttempts = 60; // Try for up to 6 seconds (100ms intervals)

    const pollInterval = setInterval(() => {
      attempts++;
      const inputEl = findInputElement(engine);

      if (inputEl) {
        clearInterval(pollInterval);
        
        // Clear the pending query from storage since we found the target element
        clearPendingQuery();
        
        injectTextAndSubmit(inputEl, query, autoSubmit, engine);
      } else if (attempts >= maxAttempts) {
        clearInterval(pollInterval);
        
        // Clear on timeout so we don't leave stale queries
        clearPendingQuery();
        console.warn('SwiftQuery: Could not find prompt input field on the page.');
      }
    }, 100);
  }

  function clearPendingQuery() {
    chrome.storage.local.set({
      pendingQuery: null,
      pendingEngine: null,
      pendingTimestamp: null
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
  }

  function findInputElement(engine) {
    // Robust selectors returning either contenteditables, role textboxes, or standard textareas
    if (engine === 'chatgpt') {
      return document.querySelector('#prompt-textarea') ||
             document.querySelector('textarea') ||
             document.querySelector('[role="textbox"]') ||
             document.querySelector('[contenteditable="true"]');
    }
    
    if (engine === 'gemini') {
      return document.querySelector('.ql-editor[contenteditable="true"]') ||
             document.querySelector('.ql-editor') ||
             document.querySelector('div[contenteditable="true"]') || 
             document.querySelector('div[role="textbox"]') ||
             document.querySelector('[role="textbox"]') ||
             document.querySelector('textarea');
    }
    
    if (engine === 'claude') {
      return document.querySelector('div[contenteditable="true"]') || 
             document.querySelector('div[role="textbox"]') ||
             document.querySelector('[role="textbox"]') ||
             document.querySelector('textarea');
    }
    
    if (engine === 'perplexity') {
      return document.querySelector('textarea[placeholder*="Ask"]') || 
             document.querySelector('textarea[placeholder*="Search"]') || 
             document.querySelector('.ql-editor[contenteditable="true"]') ||
             document.querySelector('.ql-editor') ||
             document.querySelector('div[contenteditable="true"]') ||
             document.querySelector('div[role="textbox"]') ||
             document.querySelector('[role="textbox"]') ||
             document.querySelector('textarea');
    }

    return null;
  }

  function injectTextAndSubmit(element, text, autoSubmit, engine) {
    element.focus();

    // 1. Clear existing text
    if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
      element.value = '';
    } else {
      element.innerHTML = '';
    }

    // 2. Inject text using document.execCommand (reliable for React/rich-text state synchronization)
    let injected = false;
    try {
      injected = document.execCommand('insertText', false, text);
    } catch (e) {
      console.warn('SwiftQuery: execCommand failed, falling back to direct injection.', e);
    }

    // Fallback if execCommand did not work or threw an error
    if (!injected) {
      if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
        element.value = text;
      } else {
        // Wrap in a paragraph to maintain Quill structure
        element.innerHTML = `<p>${escapeHtml(text)}</p>`;
      }
    }

    // Dispatch input events in ALL cases to trigger the React/Framework state change!
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));

    console.log('SwiftQuery: Prompt successfully injected.');

    // 3. Trigger submit if auto-submit is enabled
    if (autoSubmit) {
      // Wait briefly for the UI state/react component state to update
      setTimeout(() => {
        const submitted = triggerSubmit(element, engine);
        if (submitted) {
          console.log('SwiftQuery: Form auto-submitted.');
        } else {
          console.warn('SwiftQuery: Auto-submit failed. Please press Enter manually.');
        }
      }, 500);
    }
  }

  function triggerSubmit(inputElement, engine) {
    // Look for submit button
    const submitBtn = findSubmitButton(inputElement, engine);

    // Try clicking the button if we found it
    if (submitBtn && !submitBtn.disabled && !submitBtn.hasAttribute('disabled')) {
      const clicked = clickElement(submitBtn);
      if (clicked) return true;
    }

    // Fallback: Dispatch full Enter keypress sequence (useful if button is obfuscated or disabled)
    console.log('SwiftQuery: Submit button not found, disabled, or click failed. Attempting Enter keypress fallback...');
    simulateEnterKey(inputElement);
    return true;
  }

  function clickElement(el) {
    if (!el) return false;
    try {
      // 1. Native click
      el.click();
      return true;
    } catch (e) {
      console.warn('SwiftQuery: Standard click failed, dispatching MouseEvents...', e);
    }
    
    try {
      // 2. Dispatch mousedown, mouseup, click Sequence
      const mousedown = new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window });
      const mouseup = new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window });
      const click = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
      
      el.dispatchEvent(mousedown);
      el.dispatchEvent(mouseup);
      el.dispatchEvent(click);
      return true;
    } catch (e) {
      console.error('SwiftQuery: MouseEvent dispatch failed.', e);
    }
    return false;
  }

  function findSubmitButton(inputElement, engine) {
    let btn = null;

    // Tag-agnostic attribute matching for custom elements/styled divs
    if (engine === 'chatgpt') {
      btn = document.querySelector('[data-testid="send-button"]') ||
            document.querySelector('[aria-label="Send prompt"]') ||
            document.querySelector('[aria-label*="Send"]');
    } 
    
    else if (engine === 'gemini') {
      btn = document.querySelector('[aria-label*="Send message"]') ||
            document.querySelector('[aria-label*="Send"]') ||
            document.querySelector('.send-button') ||
            document.querySelector('div.input-area button') ||
            document.querySelector('div[class*="input-area"] button') ||
            document.querySelector('[aria-label*="Submit"]');
    } 
    
    else if (engine === 'claude') {
      btn = document.querySelector('[aria-label="Send Message"]') ||
            document.querySelector('[class*="submit"]') ||
            document.querySelector('[aria-label*="Send"]');
    } 
    
    else if (engine === 'perplexity') {
      btn = document.querySelector('[aria-label*="Submit"]') ||
            document.querySelector('[aria-label*="Search"]') ||
            document.querySelector('[class*="bg-super"]') ||
            document.querySelector('[class*="bg-accent"]') ||
            document.querySelector('[class*="bg-primary"]') ||
            document.querySelector('.bg-super');
    }

    if (btn) return btn;

    // Generic Fallback: Search all interactive tags in parent tree
    const parentContainer = inputElement.closest('form') || 
                            inputElement.closest('div[class*="input"]') ||
                            inputElement.parentElement?.parentElement;
                            
    if (parentContainer) {
      // Find the first button or candidate div inside the container
      const candidates = Array.from(parentContainer.querySelectorAll('button, div[role="button"], span[role="button"]'));
      if (candidates.length > 0) {
        // Look for element with "send", "submit", "ask", or similar in its attributes
        const sendBtn = candidates.find(b => {
          const label = (b.getAttribute('aria-label') || '').toLowerCase();
          const title = (b.getAttribute('title') || '').toLowerCase();
          const className = b.className.toLowerCase();
          return label.includes('send') || label.includes('submit') || label.includes('ask') ||
                 title.includes('send') || title.includes('submit') ||
                 className.includes('send') || className.includes('submit') ||
                 b.querySelector('svg'); // SVG presence hints at button
        });
        if (sendBtn) return sendBtn;
        
        // Default fallback to the last button
        return candidates[candidates.length - 1];
      }
    }

    return null;
  }

  function simulateEnterKey(element) {
    const eventOptions = {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      which: 13,
      bubbles: true,
      cancelable: true
    };
    
    element.dispatchEvent(new KeyboardEvent('keydown', eventOptions));
    element.dispatchEvent(new KeyboardEvent('keypress', eventOptions));
    element.dispatchEvent(new KeyboardEvent('keyup', eventOptions));
  }
})();

