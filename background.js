// Initialize default settings on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get([
    'engines',
    'autoSubmit',
    'triggerMode',
    'theme'
  ], (result) => {
    const defaults = {};
    
    if (result.engines === undefined) {
      defaults.engines = {
        chatgpt: true,
        gemini: true,
        claude: true
      };
    }
    
    if (result.autoSubmit === undefined) {
      defaults.autoSubmit = true;
    }
    
    if (result.triggerMode === undefined) {
      defaults.triggerMode = 'instant'; // options: 'instant', 'button', 'key'
    }
    
    if (result.theme === undefined) {
      defaults.theme = 'light'; // options: 'system', 'light', 'dark'
    }
    
    if (Object.keys(defaults).length > 0) {
      chrome.storage.local.set(defaults, () => {
        console.log('SwiftQuery: Default settings initialized.');
      });
    }
  });
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'openTab') {
    chrome.tabs.create({ url: message.url }, (tab) => {
      sendResponse({ success: true, tabId: tab.id });
    });
    return true; // Keep message channel open for asynchronous sendResponse
  }
});
