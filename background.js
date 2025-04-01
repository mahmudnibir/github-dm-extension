chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle the 'start_auth' message to begin the OAuth flow
  if (message.action === "start_auth") {
    const clientId = "Ov23livL4oUusWYiKYFP"; // Replace with your GitHub Client ID
    const redirectUri = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo&redirect_uri=${encodeURIComponent("http://localhost:8080/auth/callback")}`;

    chrome.tabs.create({ url: redirectUri });
  }

  // Handle the 'open_popup' message to open the popup
  if (message.action === "open_popup") {
    console.log("Open popup action triggered!");

    // Open a popup window with popup.html
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"), // Correct path for popup.html
      type: "popup",
      width: 300,
      height: 500
    });
  }

  // Handle the 'auth_callback' message to handle the callback after GitHub OAuth
  if (message.action === "auth_callback") {
    const urlParams = new URLSearchParams(message.url);
    const code = urlParams.get('code');

    if (code) {
      // Use fetch to request an access token from your backend
      fetch(`http://localhost:8080/auth/callback?code=${code}`)
        .then(response => response.json())
        .then(data => {
          // Store the access token in localStorage
          localStorage.setItem("github_access_token", data.access_token);

          // Notify the popup.js of login success
          chrome.runtime.sendMessage({ action: "login_success" });
        })
        .catch(error => console.error("Error during authentication:", error));
    } else {
      console.error("No code found in callback URL");
    }
  }

  // Always return true for async sendResponse
  return true;
});
