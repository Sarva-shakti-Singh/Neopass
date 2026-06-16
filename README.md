# 🔐 NeoPass - Chrome Extension Password Manager

> A powerful, user-friendly Chrome extension for secure password management and authentication.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Sarva--shakti--Singh%2FNeopass-blue?style=flat&logo=github)](https://github.com/Sarva-shakti-Singh/Neopass)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Chrome Version](https://img.shields.io/badge/Chrome-90%2B-brightgreen)](https://www.google.com/chrome/)

---

## 🚀 Quick Start

### For Users - Installation (5 minutes)

```bash
# 1. Download the project
git clone https://github.com/Sarva-shakti-Singh/Neopass.git
cd Neopass

# 2. Extract is already done! (NeoPass-main folder exists)

# 3. Open Chrome and go to: chrome://extensions

# 4. Enable "Developer mode" (top-right)

# 5. Click "Load unpacked" and select the "NeoPass-main" folder

# ✅ Done! Extension is now active
```

**Detailed instructions?** → See [INSTALLATION.md](./INSTALLATION.md)

---

## 📁 Project Structure

```
Neopass/
├── NeoPass-main/          ← Extension source code
│   ├── data/              ← User data storage
│   ├── images/            ← Extension icons
│   ├── manifest.json      ← Extension config
│   ├── popup.html/js      ← UI & logic
│   ├── contentScript.js   ← Page interaction
│   └── worker.js          ← Background service
│
├── INSTALLATION.md        ← Installation guide
├── FOLDER_STRUCTURE.md    ← Folder documentation
├── build-archive.js       ← Create distribution ZIP
└── package.json           ← Project metadata
```

**See full details?** → [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)

---

## ✨ Features

- 🔐 **Secure Storage** - Encrypted password storage
- 📋 **Auto-fill** - Automatically fill login forms
- 🔍 **Form Detection** - Intelligent login form recognition
- 🎯 **Easy Setup** - Simple installation and configuration
- 🛡️ **Privacy First** - All data stored locally on your machine
- ⚡ **Fast** - Quick access to credentials with one click
- 🎨 **User-Friendly** - Intuitive interface and controls

---

## 📥 Installation Methods

### Method 1: Clone from GitHub (Recommended)
```bash
git clone https://github.com/Sarva-shakti-Singh/Neopass.git
cd Neopass
# Then load NeoPass-main/ in Chrome
```

### Method 2: Download ZIP
1. Click "Code" → "Download ZIP" on GitHub
2. Extract the ZIP file
3. Load `NeoPass-main/` folder in Chrome (chrome://extensions)

### Method 3: Use Pre-built Archive (Advanced)
```bash
npm install
npm run build:zip
# Distributes NeoPass-[version]-[date].zip
```

---

## 🔧 Setup Instructions

### Step-by-Step Guide

**1. Open Chrome Extensions Page**
```
chrome://extensions
```

**2. Enable Developer Mode**
- Toggle "Developer mode" in the top-right corner

**3. Load Unpacked Extension**
- Click "Load unpacked"
- Navigate to and select the `NeoPass-main/` folder
- Click "Select Folder"

**4. Verify Installation**
- ✅ Extension appears in your extensions list
- ✅ Extension icon appears in the toolbar
- ✅ Click the icon to open the popup

---

## 📖 Documentation

| Document | Purpose |
|----------|----------|
| [INSTALLATION.md](./INSTALLATION.md) | Complete installation & troubleshooting guide |
| [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) | Detailed folder organization & file descriptions |
| [NeoPass-main/README.md](./NeoPass-main/README.md) | Feature documentation & usage guide |

---

## 🎯 Usage

### Adding Passwords
1. Click the NeoPass extension icon
2. Click "Add Password" or "+"
3. Enter your credentials
4. Save

### Autofill Passwords
1. Navigate to a login page
2. NeoPass detects the form
3. Click the extension icon
4. Select the credential to autofill
5. Done!

### Managing Passwords
- **Edit**: Click on a saved password to modify
- **Delete**: Remove passwords you no longer need
- **Search**: Find passwords quickly with search
- **Export**: Backup your passwords (encrypted)

---

## 📦 Creating Distribution Archives

Share NeoPass as an easy-to-install package:

```bash
# Install dependencies (first time only)
npm install

# Create ZIP archive (recommended)
npm run build:zip

# Create TAR archive (Linux/Mac)
npm run build:tar
```

**Output**: `NeoPass-[version]-[date].zip`

**Share**: Anyone can download, extract, and install it in 2 minutes!

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Extension won't load | Ensure you selected `NeoPass-main/` folder, not the parent |
| "Manifest error" | Verify manifest.json is in the correct folder |
| Popup doesn't open | Click the extension icon, or pin it to the toolbar |
| Extension crashed | Disable and re-enable in chrome://extensions |
| Permission errors | Move folder to Documents/Desktop (not Downloads) |

**Full troubleshooting?** → [INSTALLATION.md - Troubleshooting](./INSTALLATION.md#-troubleshooting)

---

## 🔐 Security & Privacy

- ✅ All data stored **locally** on your machine
- ✅ No external servers or cloud services
- ✅ Passwords are **encrypted**
- ✅ Full control over your credentials
- ✅ Open source - review the code anytime

---

## 💻 System Requirements

### Minimum
- Windows 7+, macOS 10.11+, or Linux
- Chrome 90+
- 10 MB disk space
- 50 MB RAM (when active)

### Recommended
- Windows 10/11, macOS 11+, or Ubuntu 20.04+
- Chrome 120+ (latest)
- SSD storage
- 2 GB+ RAM

---

## 🛠️ Development

### Project Structure
```
NeoPass-main/
├── manifest.json      - Extension configuration
├── popup.html         - User interface
├── popup.js          - UI logic & handlers
├── contentScript.js  - Web page injection
├── worker.js         - Background service
├── devtools.js       - Developer tools
├── data/             - User data storage
└── images/           - Icons & graphics
```

### Tech Stack
- **Languages**: JavaScript, HTML, CSS
- **API**: Chrome Extensions API
- **Storage**: Chrome Local Storage

### Building for Distribution
```bash
npm install          # Install build tools
npm run build:zip    # Create distributable ZIP
```

---

## 📝 File Descriptions

### Core Files
- **manifest.json** - Chrome extension configuration (REQUIRED)
- **popup.html** - Extension interface HTML
- **popup.js** - UI logic and event handlers (~30KB)
- **worker.js** - Background service worker (~150KB)
- **contentScript.js** - Page injection script (~6KB)

### Support Files
- **data/** - User credentials and settings
- **images/** - Extension icons and UI graphics
- **devtools.js** - Developer tools integration
- **metadata.json** - Project metadata

---

## ✅ Quality Checklist

Before sharing or using:

- [x] Extension loads without errors
- [x] No "Manifest error" on load
- [x] Popup opens when clicking extension icon
- [x] Form auto-detection works
- [x] Passwords are saved securely
- [x] All folders maintain correct structure
- [x] Documentation is complete

---

## 📞 Support & Issues

### Getting Help
1. Check [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for organization
2. Review [INSTALLATION.md](./INSTALLATION.md) for setup help
3. Check Chrome Console (F12) for errors
4. Open an issue on [GitHub Issues](https://github.com/Sarva-shakti-Singh/Neopass/issues)

### Reporting Bugs
- Provide steps to reproduce
- Include error messages from Console (F12)
- Specify Chrome version
- Attach screenshots if applicable

---

## 🤝 Contributing

We welcome contributions! 

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sarva-shakti-Singh**
- GitHub: [@Sarva-shakti-Singh](https://github.com/Sarva-shakti-Singh)
- Repository: [Neopass](https://github.com/Sarva-shakti-Singh/Neopass)

---

## 🎯 Roadmap

### v1.1 (Planned)
- [ ] Password strength indicator
- [ ] Export/import feature
- [ ] Master password protection
- [ ] Sync across devices (optional)

### v1.2 (Future)
- [ ] Biometric authentication
- [ ] Password generator
- [ ] Security audit tools
- [ ] Dark mode

---

## 📊 Statistics

- **Language**: JavaScript
- **Size**: ~10 MB (uncompressed)
- **Files**: 10+ core files
- **Setup Time**: ~2 minutes
- **Chrome Versions**: 90+

---

## 🎓 Learning Resources

- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Service Workers Guide](https://developer.chrome.com/docs/extensions/mv3/service_workers/)
- [Content Scripts API](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

---

## ⭐ If This Helped You

Star this repository to show your support! ⭐

```
Sarva-shakti-Singh/Neopass
↑
Please click the star button above
```

---

## 🙏 Acknowledgments

- Chrome Extensions Community
- Security Best Practices
- All contributors and users

---

## 📅 Changelog

### v1.0.0 (Current)
- ✅ Initial release
- ✅ Basic password management
- ✅ Auto-fill functionality
- ✅ Local data storage
- ✅ Chrome extension integration

---

## 📝 Notes for Users

### Installation Reminder
```
1. Extract the downloaded folder
2. Go to chrome://extensions
3. Enable Developer mode
4. Click "Load unpacked"
5. Select the NeoPass-main folder
6. ✅ Done!
```

### Data Safety
- Your passwords are stored **locally**
- Encrypted for security
- Regular backups recommended
- Never share your `data/` folder

### Best Practices
- ✅ Use strong, unique passwords
- ✅ Keep Chrome updated
- ✅ Backup your data folder periodically
- ✅ Review permissions regularly

---

**Happy Password Managing! 🔐**

For detailed information, see the [INSTALLATION.md](./INSTALLATION.md) and [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) files.

---

**Last Updated**: 2026-06-16  
**Version**: 1.0.0  
**Status**: ✅ Active & Maintained
