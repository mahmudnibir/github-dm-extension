# GitHub DM System

## Description
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

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
