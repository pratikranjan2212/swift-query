<p align="center">
  <img src="icon.png" width="96" height="96" alt="SwiftQuery Logo" />
</p>

<h1 align="center">SwiftQuery</h1>

<p align="center">
  <b>Select to Search Chrome Extension</b>
</p>

<p align="center">
  <img src="screenshot.png" width="750" alt="SwiftQuery Action Preview" />
</p>

---

`SwiftQuery` is a modern, lightweight, and visual-first Manifest V3 Chrome Extension. It allows you to select or highlight text on any webpage and instantly query it against popular AI search engines like **ChatGPT**, **Gemini**, and **Claude** with a beautiful, custom-designed, floating toolbar.

---

## 🌟 Key Features

* **Floaty Selection Toolbar**: Instantly appears above text selections with a beautiful, unified glassmorphism styling.
* **Encapsulated Design (Shadow DOM)**: Utilizes a closed Shadow DOM context to isolate CSS, ensuring host web page styles never distort the toolbar's aesthetics.
* **Auto-Fill & Auto-Submit**: Automatically opens the selected AI page in a new tab, inputs your highlighted text, and submits the prompt (with toggles to control this behavior).
* **3 Trigger Modes**:
  * **Instant**: Toolbar pops up immediately upon text selection.
  * **Search Circle**: Displays a small floating search badge that reveals the full menu when clicked.
  * **Shortcut Key**: Displays the toolbar only when you hold `Ctrl`, `Alt`, `Shift`, or `Cmd` while highlighting.
* **Sleek Settings Panel**: A curated dashboard with rounded corners and card controls to choose active search engines, toggle auto-submit, set trigger shortcuts, and select light, dark, or system themes.
* **Pill-Shaped Elements**: Modern layout utilizing organic pill designs and circular borders.

---

## 📂 Project Structure

```text
swift-query/
├── manifest.json     # Extension Manifest V3 configuration
├── background.js     # Background service worker coordinating tab loads
├── content.js        # Content script listening to text highlights & rendering Shadow DOM
├── injector.js       # Site-specific auto-fill and submission engine
├── popup.html        # Options panel layout
├── popup.css         # Options panel themes (Light default) & styles
├── popup.js          # Options panel reactivity & live preview simulation
├── icon.png          # Extension icon (128x128)
├── screenshot.png    # Extension action preview image
└── test.html         # Local test workbench environment
```

---

## 🚀 Installation (Chrome Developer Mode)

Since this extension is optimized for manual local installations, follow these simple steps to load it into Chrome:

1. **Download/Clone** this repository to your local system (e.g., `C:\Users\prati\dev\swift-query`).
2. Open your Google Chrome browser and navigate to `chrome://extensions/`.
3. In the top-right corner, toggle the **Developer mode** switch to **ON**.
4. In the top-left corner, click **Load unpacked**.
5. Select the `swift-query` project folder.
6. Pin **SwiftQuery** to your Chrome toolbar for easy settings access.

---

## 🧪 Local Testing

You can use the built-in [test.html](test.html) file to evaluate all features locally:
1. Double-click or highlight text on the test page.
2. Verify the floating pill shows up.
3. Click any AI button to launch the search flow in a new tab.

---

## 🛠️ Architecture Details

### 🔄 React & Framework State Synchronization
Modern AI interfaces run on complex UI state engines (e.g., React, Next.js). Simple DOM updates of input value elements are ignored. To solve this, `SwiftQuery` employs a robust injection system:
1. Simulates native keystrokes via `document.execCommand('insertText', false, text)`.
2. Dispatches bubbling React-compatible `input` and `change` events.
3. Automatically maps target elements on rich editors (like Google Gemini's Quill instance) by wrapping raw queries inside `<p>` paragraphs.
4. Executes native mouse state sequences (`mousedown` -> `mouseup` -> `click`) to bypass custom framework validation boundaries on buttons.

### 🛡️ SPA Transition Handling
When navigating from base URLs to dashboard directories, Single Page Applications (SPAs) often reload their view layer. `SwiftQuery` implements an asynchronous redirect handler:
* Retains highlighted queries in local storage temporarily (using storage validation keys) until the target editor is focused.
* Timeouts after 15 seconds to prevent stale injections.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
