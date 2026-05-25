// SVGs for the AI platforms (derived from lobe-icons) and a search icon
const ICONS = {
  chatgpt: `<svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16" style="flex:none;line-height:1" xmlns="http://www.w3.org/2000/svg"><path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z"/></svg>`,
  gemini: `<svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16" style="flex:none;line-height:1" xmlns="http://www.w3.org/2000/svg"><path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z"/></svg>`,
  claude: `<svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16" style="flex:none;line-height:1" xmlns="http://www.w3.org/2000/svg"><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex:none;line-height:1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`
};

const ENGINE_URLS = {
  chatgpt: 'https://chatgpt.com/',
  gemini: 'https://gemini.google.com/app',
  claude: 'https://claude.ai/new'
};

const ENGINE_LABELS = {
  chatgpt: 'ChatGPT',
  gemini: 'Gemini',
  claude: 'Claude'
};

// Target root of our Shadow DOM
let hostElement = null;
let shadowRoot = null;
let currentSelectionText = '';

// Check if mouse event is inside the popup
function isEventInsidePopup(e) {
  if (!hostElement) return false;
  // Closed shadow DOM event targets are retargeted to the host element
  if (e.target === hostElement) return true;
  // Fallback check
  const path = e.composedPath();
  return path.includes(hostElement);
}

// Clear active selection on the page
function clearPageSelection() {
  try {
    window.getSelection().removeAllRanges();
  } catch (err) {}
}

// Remove popup from DOM
function removePopup() {
  if (hostElement) {
    hostElement.remove();
    hostElement = null;
    shadowRoot = null;
  }
}

// Handle selection events
document.addEventListener('mouseup', handleSelection);
document.addEventListener('keyup', handleSelection);
document.addEventListener('mousedown', (e) => {
  if (hostElement && !isEventInsidePopup(e)) {
    removePopup();
  }
});

// Remove popup on scroll/resize
window.addEventListener('scroll', () => {
  // Only remove if we are not scrolling inside the popup (which shouldn't have scroll anyway)
  if (hostElement) removePopup();
}, { passive: true });

window.addEventListener('resize', () => {
  if (hostElement) removePopup();
});

function handleSelection(e) {
  // Don't trigger if clicked inside the popup itself
  if (isEventInsidePopup(e)) return;

  // Wait slightly for browser selection state to update fully
  setTimeout(() => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (!selectedText || selectedText.length < 2 || selectedText.length > 2000) {
      // If we clicked outside and selection is cleared, remove popup
      if (!selectedText && hostElement) {
        removePopup();
      }
      return;
    }

    currentSelectionText = selectedText;

    // Load extension settings from storage
    chrome.storage.local.get(['engines', 'triggerMode', 'theme'], (settings) => {
      const engines = settings.engines || {
        chatgpt: true,
        gemini: true,
        claude: true
      };
      const triggerMode = settings.triggerMode || 'instant';
      const theme = settings.theme || 'light';

      // Verify if at least one engine is enabled
      const enabledEngines = Object.keys(engines).filter(k => engines[k]);
      if (enabledEngines.length === 0) return;

      // Handle trigger mode constraints
      if (triggerMode === 'key') {
        const isKeyHeld = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey;
        if (!isKeyHeld) {
          removePopup();
          return;
        }
      }

      // We have a selection and matching trigger constraints! Let's display the popup.
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      showPopup(rect, enabledEngines, triggerMode, theme);
    });
  }, 10);
}

function showPopup(selectionRect, enabledEngines, triggerMode, theme) {
  // If a popup already exists, remove it first
  removePopup();

  // Create our host element
  hostElement = document.createElement('div');
  hostElement.id = 'swiftquery-root';
  
  // Style host element to contain coordinates and be fixed
  Object.assign(hostElement.style, {
    position: 'absolute',
    zIndex: '2147483647', // Max z-index to overlay everything
    pointerEvents: 'none',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '0px',
    overflow: 'visible'
  });

  // Attach a closed shadow root to isolate styling completely
  shadowRoot = hostElement.attachShadow({ mode: 'closed' });

  // Resolve theme
  let isDarkMode = false;
  if (theme === 'dark') {
    isDarkMode = true;
  } else if (theme === 'light') {
    isDarkMode = false;
  } else {
    // System theme
    isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Create CSS stylesheet inside the Shadow DOM
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    :host {
      all: initial;
    }
    
    .popup-wrapper {
      position: absolute;
      pointer-events: auto;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 13px;
      line-height: 1;
      opacity: 0;
      transform: scale(0.92) translateY(6px);
      transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 2147483647;
    }

    .popup-wrapper.visible {
      opacity: 1;
      transform: scale(1) translateY(0);
    }

    /* Bubble toolbar styles */
    .toolbar-container {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      border-radius: 9999px;
      box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);
      white-space: nowrap;
    }

    /* Circular trigger button styles */
    .trigger-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      box-shadow: 0 6px 20px -3px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      border: 1px solid;
      transition: transform 0.2s, background-color 0.2s;
    }

    .trigger-circle:hover {
      transform: scale(1.08);
    }

    .trigger-circle svg {
      width: 15px;
      height: 15px;
    }

    /* Common themed states */
    .theme-dark {
      background: rgba(26, 26, 28, 0.92);
      backdrop-filter: blur(12px) saturate(160%);
      -webkit-backdrop-filter: blur(12px) saturate(160%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #f3f4f6;
    }

    .theme-light {
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(12px) saturate(160%);
      -webkit-backdrop-filter: blur(12px) saturate(160%);
      border: 1px solid rgba(0, 0, 0, 0.08);
      color: #1f2937;
      box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    /* Buttons inside toolbar */
    .engine-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      border-radius: 9999px;
      border: 1px solid transparent;
      background: transparent;
      cursor: pointer;
      font-size: 12px;
      font-weight: 700;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .engine-btn svg {
      width: 14px;
      height: 14px;
    }

    /* Dark Mode hover states */
    .theme-dark .engine-btn {
      color: rgba(255, 255, 255, 0.8);
    }
    
    .theme-dark .engine-btn:hover {
      transform: translateY(-1px);
      color: #ffffff;
    }

    .theme-dark .engine-btn.btn-chatgpt:hover {
      background: rgba(16, 163, 127, 0.16);
      border-color: rgba(16, 163, 127, 0.35);
      color: #10a37f;
      box-shadow: 0 0 12px rgba(16, 163, 127, 0.2);
    }

    .theme-dark .engine-btn.btn-gemini:hover {
      background: rgba(26, 115, 232, 0.16);
      border-color: rgba(26, 115, 232, 0.35);
      color: #4285f4;
      box-shadow: 0 0 12px rgba(26, 115, 232, 0.2);
    }

    .theme-dark .engine-btn.btn-claude:hover {
      background: rgba(217, 119, 95, 0.16);
      border-color: rgba(217, 119, 95, 0.35);
      color: #e28774;
      box-shadow: 0 0 12px rgba(217, 119, 95, 0.2);
    }

    /* Light Mode hover states */
    .theme-light .engine-btn {
      color: rgba(31, 41, 55, 0.8);
    }

    .theme-light .engine-btn:hover {
      transform: translateY(-1px);
      color: #111827;
    }

    .theme-light .engine-btn.btn-chatgpt:hover {
      background: rgba(16, 163, 127, 0.1);
      border-color: rgba(16, 163, 127, 0.25);
      color: #0e8466;
      box-shadow: 0 0 12px rgba(16, 163, 127, 0.12);
    }

    .theme-light .engine-btn.btn-gemini:hover {
      background: rgba(26, 115, 232, 0.1);
      border-color: rgba(26, 115, 232, 0.25);
      color: #1a73e8;
      box-shadow: 0 0 12px rgba(26, 115, 232, 0.12);
    }

    .theme-light .engine-btn.btn-claude:hover {
      background: rgba(217, 119, 95, 0.1);
      border-color: rgba(217, 119, 95, 0.25);
      color: #c2614b;
      box-shadow: 0 0 12px rgba(217, 119, 95, 0.12);
    }

    /* Press states */
    .engine-btn:active, .trigger-circle:active {
      transform: scale(0.96) translateY(0) !important;
    }
  `;

  shadowRoot.appendChild(styleEl);

  // Setup DOM container
  const wrapper = document.createElement('div');
  wrapper.className = 'popup-wrapper';

  // Build inside elements depending on triggerMode
  if (triggerMode === 'button') {
    // Show a circular icon first, clicking reveals the engines
    const circle = document.createElement('div');
    circle.className = `trigger-circle theme-${isDarkMode ? 'dark' : 'light'}`;
    circle.innerHTML = ICONS.search;
    circle.addEventListener('click', (e) => {
      e.stopPropagation();
      // Transition to full toolbar
      showFullToolbar(wrapper, enabledEngines, isDarkMode);
    });
    wrapper.appendChild(circle);
  } else {
    // Render full toolbar instantly
    renderFullToolbar(wrapper, enabledEngines, isDarkMode);
  }

  shadowRoot.appendChild(wrapper);
  document.body.appendChild(hostElement);

  // Set position
  positionPopup(wrapper, selectionRect);

  // Fade-in animation
  requestAnimationFrame(() => {
    wrapper.classList.add('visible');
  });
}

function showFullToolbar(wrapper, enabledEngines, isDarkMode) {
  wrapper.style.opacity = '0';
  wrapper.style.transform = 'scale(0.95)';
  setTimeout(() => {
    wrapper.innerHTML = '';
    renderFullToolbar(wrapper, enabledEngines, isDarkMode);
    wrapper.style.opacity = '1';
    wrapper.style.transform = 'scale(1)';
    // Re-adjust positioning in case the size changed drastically
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      positionPopup(wrapper, rect);
    }
  }, 120);
}

function renderFullToolbar(wrapper, enabledEngines, isDarkMode) {
  const container = document.createElement('div');
  container.className = `toolbar-container theme-${isDarkMode ? 'dark' : 'light'}`;

  enabledEngines.forEach((engineKey) => {
    const btn = document.createElement('button');
    btn.className = `engine-btn btn-${engineKey}`;
    btn.innerHTML = `${ICONS[engineKey]}<span>${ENGINE_LABELS[engineKey]}</span>`;
    
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      
      const textToSearch = currentSelectionText;
      
      // Save details to chrome.storage.local for injector.js to read on the new page
      chrome.storage.local.set({
        pendingQuery: textToSearch,
        pendingEngine: engineKey,
        pendingTimestamp: Date.now()
      }, () => {
        // Clear selection and remove popup
        clearPageSelection();
        removePopup();
        
        // Open the AI tab via background service worker (avoids popup block triggers)
        let targetUrl = ENGINE_URLS[engineKey];
        chrome.runtime.sendMessage({
          action: 'openTab',
          url: targetUrl
        });
      });
    });

    container.appendChild(btn);
  });

  wrapper.appendChild(container);
}

function positionPopup(popupEl, selectionRect) {
  const popupWidth = popupEl.offsetWidth || 340; // Fallback estimate
  const popupHeight = popupEl.offsetHeight || 38;  // Fallback estimate
  const spacing = 8; // Pixels from selection

  // Account for scrolling
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  // Base positions relative to selection
  let top = selectionRect.top + scrollY - popupHeight - spacing;
  let left = selectionRect.left + scrollX + (selectionRect.width - popupWidth) / 2;

  // Boundary Checks
  // 1. Top boundary: if it overflows the top of the viewport, display it below the selection instead
  if (selectionRect.top - popupHeight - spacing < 0) {
    top = selectionRect.bottom + scrollY + spacing;
  }

  // 2. Left boundary check
  if (left < scrollX + 8) {
    left = scrollX + 8;
  }

  // 3. Right boundary check
  const viewportWidth = window.innerWidth;
  if (left + popupWidth > scrollX + viewportWidth - 8) {
    left = scrollX + viewportWidth - popupWidth - 8;
  }

  // Apply positions
  popupEl.style.top = `${top}px`;
  popupEl.style.left = `${left}px`;
}
