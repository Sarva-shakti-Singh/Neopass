# NeoPass Installation & Setup Guide

Complete guide to download, extract, and install NeoPass on your system.

---

## 📥 Method 1: Clone from GitHub (Recommended for Developers)

### Prerequisites
- Git installed on your system
- Chrome browser

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Sarva-shakti-Singh/Neopass.git

# 2. Navigate to the project folder
cd Neopass

# 3. You're ready! The NeoPass-main folder contains the extension
```

---

## 📦 Method 2: Download as ZIP (Recommended for Users)

### Steps

1. **Visit GitHub Repository**
   - Go to: https://github.com/Sarva-shakti-Singh/Neopass
   - Click the green **"Code"** button
   - Select **"Download ZIP"**

2. **Extract the ZIP File**
   - **Windows**: Right-click → "Extract All"
   - **macOS**: Double-click the ZIP file
   - **Linux**: `unzip Neopass-main.zip`

3. **Locate the Extension Folder**
   - Navigate to the extracted folder
   - Find the `NeoPass-main/` folder inside
   - This is your extension directory

---

## 🚀 Loading the Extension in Chrome

### Step 1: Open Chrome Extensions Page
```
1. Open Google Chrome
2. Press Ctrl+Shift+M (or Cmd+Shift+M on Mac)
3. OR manually go to: chrome://extensions
```

### Step 2: Enable Developer Mode
- In the top-right corner, toggle **"Developer mode"** ON
- You'll see new buttons appear

### Step 3: Load Unpacked Extension
1. Click **"Load unpacked"** button
2. Navigate to and select the **`NeoPass-main/`** folder
3. Click **"Select Folder"**

### Step 4: Verify Installation
- ✅ Extension appears in your Chrome extension list
- ✅ Extension icon appears in the toolbar
- ✅ You can click the icon to open the popup

---

## ✅ Verification Checklist

After installation, verify everything works:

```
✓ Extension appears in chrome://extensions
✓ Extension icon visible in toolbar
✓ Popup opens when you click the extension icon
✓ No errors in the console (F12 > Console tab)
✓ Permissions are granted in the popup
```

---

## 📂 Folder Structure After Extraction

```
Neopass/  (or Neopass-main/ if downloaded as ZIP)
├── NeoPass-main/           ← The actual extension folder
│   ├── data/               ← Your personal data storage
│   ├── images/             ← Extension icons
│   ├── manifest.json       ← Extension config (DON'T DELETE)
│   ├── popup.html          ← Extension interface
│   ├── popup.js            ← Extension logic
│   ├── contentScript.js    ← Page interaction script
│   ├── worker.js           ← Background service
│   └── devtools.js         ← Developer tools
├── package.json            ← Project metadata
├── .gitignore              ← Git configuration
├── INSTALLATION.md         ← This file
├── FOLDER_STRUCTURE.md     ← Folder documentation
└── build-archive.js        ← Distribution builder
```

---

## ⚙️ System Requirements

### Minimum Requirements
- **OS**: Windows 7+, macOS 10.11+, Linux
- **Browser**: Google Chrome 90+
- **Disk Space**: ~10 MB
- **RAM**: ~50 MB (when extension is active)

### Recommended Requirements
- **OS**: Windows 10/11, macOS 11+, Ubuntu 20.04+
- **Browser**: Chrome 120+ (latest)
- **Internet**: Required for initial setup (offline after that)

---

## 🔧 Creating a Distributable Archive (Advanced)

For sharing or backup purposes, create a compressed archive:

### Prerequisites
```bash
# Install Node.js from https://nodejs.org/
# (v14 or higher)
```

### Create Archive
```bash
# 1. Install dependencies
npm install

# 2. Create ZIP archive (recommended)
npm run build:zip

# Output: NeoPass-archive.zip
```

### Share the Archive
- The `NeoPass-archive.zip` contains the complete extension
- Users can extract it and follow the "Loading the Extension" steps above
- Total size: ~5-10 MB (depending on data)

---

## 🐛 Troubleshooting

### Problem: Extension doesn't load
**Solution:**
1. Ensure you selected the `NeoPass-main/` folder (not the parent)
2. Verify `manifest.json` exists in that folder
3. Refresh the extension (F5 or click refresh icon)
4. Check for errors: F12 → Console tab

### Problem: "Manifest error"
**Solution:**
1. Ensure `manifest.json` is valid JSON (no syntax errors)
2. Don't edit `manifest.json` unless necessary
3. Try removing and reloading the extension

### Problem: Popup doesn't open
**Solution:**
1. Click the extension icon in the toolbar
2. If icon is not visible:
   - Go to `chrome://extensions/`
   - Find NeoPass
   - Scroll right and pin it to the toolbar
3. Check F12 console for errors

### Problem: Extension crashed
**Solution:**
1. Disable and re-enable the extension (toggle in chrome://extensions)
2. Reload the page
3. Clear extension data: Settings → Privacy → Clear browsing data
4. Reinstall: Remove and "Load unpacked" again

### Problem: Permission denied errors
**Solution:**
1. Move the NeoPass folder to a location with write permissions
   - ❌ Don't keep in Downloads
   - ✅ Move to Documents, Desktop, or a dedicated folder
2. On Mac/Linux, run: `chmod -R 755 NeoPass-main/`

---

## 📖 Next Steps

After successful installation:

1. **Read the README**: Open `NeoPass-main/README.md` for features and usage
2. **Configure Settings**: Open the popup and set up your preferences
3. **Add Passwords**: Start adding your credentials securely
4. **Explore Features**: Check all available functions in the extension

---

## 🤝 Getting Help

If you encounter issues:

1. **Check** [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for file organization
2. **Review** [README.md](./NeoPass-main/README.md) for feature documentation
3. **Open an Issue** on GitHub: https://github.com/Sarva-shakti-Singh/Neopass/issues
4. **Check Chrome Console** (F12) for error messages

---

## 📝 Important Notes

✅ **DO:**
- Extract to a permanent folder
- Keep `NeoPass-main/` folder intact
- Set up proper file permissions
- Backup your `data/` folder regularly

❌ **DON'T:**
- Delete or rename core files
- Modify `manifest.json` without reason
- Move the extension folder after loading
- Share your `data/` folder (contains sensitive info)

---

## 🔐 Security & Privacy

- Your data is stored locally in the `data/` folder
- Nothing is sent to external servers without permission
- Passwords are encrypted for security
- Review the [README.md](./NeoPass-main/README.md) for full privacy policy

---

**Version**: 1.0.0  
**Last Updated**: 2026-06-16  
**Author**: Sarva-shakti-Singh

For more information, visit: https://github.com/Sarva-shakti-Singh/Neopass
