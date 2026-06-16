# NeoPass Folder Structure Documentation

This document explains the organization and purpose of each folder and file in the NeoPass project.

## 📁 Project Structure

```
NeoPass/
├── NeoPass-main/              # Main extension directory
│   ├── data/                  # Data storage and configuration files
│   ├── images/                # Icons and images for the extension UI
│   ├── manifest.json          # Chrome extension manifest (required)
│   ├── metadata.json          # Project metadata
│   ├── nptel.txt              # Additional configuration/notes
│   ├── popup.html             # Extension popup UI
│   ├── popup.js               # Extension popup logic
│   ├── contentScript.js       # Content script for page interaction
│   ├── devtools.js            # Developer tools integration
│   ├── worker.js              # Service worker (background script)
│   └── README.md              # Project documentation
│
├── package.json               # Node.js project configuration (NEW)
├── .gitignore                 # Git ignore rules (NEW)
├── FOLDER_STRUCTURE.md        # This file (NEW)
├── INSTALLATION.md            # Installation guide (NEW)
├── build-archive.js           # Build script for distribution (NEW)
└── README.md                  # Main project readme
```

## 📂 Folder & File Descriptions

### `NeoPass-main/` - Main Extension Directory
The core directory containing all extension source files and assets.

#### `data/`
- **Purpose**: Stores user data, configurations, and persistent storage
- **When extracted**: Users may add their own data files here
- **Contents**: JSON files for user credentials, settings, and cache

#### `images/`
- **Purpose**: Contains all visual assets for the extension
- **Includes**: 
  - Extension icons (16x16, 32x32, 48x48, 128x128)
  - UI graphics and logos
  - Favicon files

#### `manifest.json`
- **Purpose**: Chrome extension configuration file (REQUIRED)
- **Contains**:
  - Extension metadata (name, version, description)
  - Permissions declarations
  - Script and style references
  - Action button configuration
  - Content script injection rules

#### `popup.html`
- **Purpose**: User interface for the extension popup
- **Displays**: Password manager interface, login forms, settings

#### `popup.js`
- **Purpose**: Logic and event handlers for the popup UI
- **Handles**: User interactions, form submissions, data management

#### `contentScript.js`
- **Purpose**: Injected script that runs on web pages
- **Functionality**: 
  - Detects login forms
  - Auto-fills passwords
  - Monitors page changes
  - Communicates with background script

#### `worker.js`
- **Purpose**: Service worker (background process)
- **Handles**:
  - Extension lifecycle management
  - Message passing between scripts
  - Data encryption/decryption
  - API requests

#### `devtools.js`
- **Purpose**: Developer tools integration
- **Used for**: Debugging and development

#### `metadata.json`
- **Purpose**: Project metadata and version information

#### `nptel.txt`
- **Purpose**: Configuration notes or reference data

---

## 🚀 How to Extract and Use

### Step 1: Download
```bash
git clone https://github.com/Sarva-shakti-Singh/Neopass.git
cd Neopass
```

### Step 2: Extract
The folder structure is already organized. The `NeoPass-main/` directory is your extension.

### Step 3: Load in Chrome
1. Open Chrome and go to `chrome://extensions`
2. Enable "Developer mode" (top right)
3. Click "Load unpacked"
4. Select the `NeoPass-main/` folder
5. The extension will be installed and active

### Step 4: (Optional) Create Distribution Archive
```bash
# Install dependencies first
npm install

# Create a ZIP archive
npm run build:zip

# Or create a TAR archive
npm run build:tar
```

---

## 📝 Important Notes

### For Users Extracting the Folder:
- ✅ Extract to a stable location (not Downloads)
- ✅ Don't move files between folders
- ✅ Keep the folder structure intact
- ✅ Maintain read/write permissions for the `data/` folder
- ❌ Don't modify `manifest.json` unless you know what you're doing

### For Developers:
- Keep all files in their designated folders
- Don't add new dependencies without updating `package.json`
- Follow the existing file naming conventions
- Test changes in Chrome with developer mode

---

## 🔄 File Dependencies

```
manifest.json
  ├── references popup.html, popup.js
  ├── references contentScript.js
  ├── references worker.js
  ├── references devtools.js
  └── references images/

popup.html
  └── loads popup.js

popup.js
  ├── communicates with worker.js
  ├── loads images from images/
  └── reads/writes to data/

contentScript.js
  ├── injected into web pages
  └── communicates with worker.js

worker.js
  ├── manages extension lifecycle
  ├── handles message passing
  ├── manages data/ folder
  └── communicates with popup.js and contentScript.js
```

---

## 💾 Data Storage Locations

- **User Data**: `data/` folder (persists across browser sessions)
- **Extension Config**: `manifest.json` (loaded at startup)
- **Temporary Data**: RAM only (cleared on extension reload)

---

## 🔐 Security Notes

- Sensitive credentials should be encrypted
- User data in `data/` folder should have proper access controls
- Service worker manages sensitive operations
- Content script runs with limited permissions

---

For more details, see [INSTALLATION.md](./INSTALLATION.md) and the main [README.md](./NeoPass-main/README.md).
