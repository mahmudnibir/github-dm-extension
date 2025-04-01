 ███ ███╗ ██╗████ ███╗██╗  ██╗██╗   ██╗███ ███╗ 
██╔══██╗██║╚══██╔══╝██║  ██║██║ ██║ ██╔══██╗
████ ██╔╝██║   ██║   ████ ███║██║   ██║███ ███╔╝
██╔═══╝ ██║   ██║   ██╔══██║██║    



# 📌 GitHub DM System

![GitHub status](https://img.shields.io/badge/status-updating-brightgreen.svg) 
![GitHub Repo stars](https://img.shields.io/github/stars/mahmudnibir/github-dm-extension?style=social) 
![GitHub forks](https://img.shields.io/github/forks/mahmudnibir/github-dm-extension?style=social)
![GitHub contributors](https://img.shields.io/github/contributors/mahmudnibir/github-dm-extension)
![GitHub issues](https://img.shields.io/github/issues/mahmudnibir/github-dm-extension)
![GitHub last commit](https://img.shields.io/github/last-commit/mahmudnibir/github-dm-extension)
![GitHub license](https://img.shields.io/github/license/mahmudnibir/github-dm-extension)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/mahmudnibir/github-dm-extension)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/mahmudnibir/github-dm-extension)
![Platform](https://img.shields.io/badge/platform-linux%20%7C%20macOS%20%7C%20windows-blue)

---
> [!NOTE]
 This project is not fully ready yet. Feel free to contribute to this project.

> [!WARNING]
 This project is intended for learning and experimentation. Please use it responsibly and ethically.

--- 

## 📚 Table of Contents  
- [Overview](#overview)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)    
- [Contribution](#contribution-guidelines)  
- [License](#license)  
- [Contact](#contact)  
- [Support](#support)

## Overview 
The GitHub DM System is a Chrome extension that adds a message button to GitHub profiles, allowing users to send direct messages via GitHub Issues. This extension enhances user interaction on GitHub by providing a seamless way to communicate.

## Features
- Adds a message button to GitHub profiles.
- Utilizes GitHub OAuth for authentication.
- Direct messaging through GitHub Issues.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mahmudnibir/github-dm-extension.git
   ```
2. Navigate to the project directory:
   ```bash
   cd github-dm-extension
   ```
3. Install dependencies (if any):
   ```bash
   npm install
   ```

## Usage
1. Load the extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project directory.
2. Click on the extension icon in the toolbar to open the popup.
3. Authenticate using your GitHub account.

## GitHub OAuth Configuration
To use the GitHub OAuth functionality, you need to set up your GitHub application and add the following environment variables in a `.env` file:
```
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

## Running the Server
To run the server for handling OAuth callbacks:
```bash
node app.js
```
The server will be running on `http://localhost:8080`.

## Permissions
The extension requires the following permissions:
- `identity`: For OAuth authentication.
- `storage`: To store user data.
- `activeTab`: To interact with the current tab.
- `scripting`: To execute scripts on the page.

---

## Contribution Guidelines  

💡 **Want to improve the script?** Contributions are welcome!  

### **📌 How to Contribute**  
| Step | Action |
|------|--------|
| 🏗 **Fork** | Clone the repo & create a new branch |
| 🔧 **Develop** | Make your changes, write clear commit messages |
| 📌 **Push** | Push to your fork & create a PR |
| 🚀 **Review** | Wait for approval & merge |


---

## License  

📝 This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## Contact  
*Developed by [Nibir Mahmud](https://github.com/mahmudnibir)*


📧 **Email**: [nibirbbkr@gmail.com](mailto:nibirbbkr@gmail.com)  
🐦 **Github**: [@mahmudnibir](https://github.com/mahmudnibir)  

---
## Support  

> [!TIP]
 If you find this project helpful, **please consider giving it a star ⭐ on GitHub!** It helps others discover the project.  

---

