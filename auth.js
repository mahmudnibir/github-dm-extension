const CLIENT_ID = "Ov23livL4oUusWYiKYFP"; // Replace with your GitHub Client ID
const CLIENT_SECRET = "8c7d730eb89159957442a7a0dce441d5c67f32d0"; // Replace with your GitHub Client Secret
const REDIRECT_URI = "http://localhost:8080/auth/callback"; // Change in production

async function exchangeCodeForToken(code) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code
    })
  });

  const data = await response.json();
  return data.access_token;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "handle_auth") {
    const urlParams = new URLSearchParams(message.url.split("?")[1]);
    const code = urlParams.get("code");

    if (code) {
      exchangeCodeForToken(code).then(token => {
        chrome.storage.sync.set({ github_token: token }, () => {
          console.log("GitHub token saved!");
        });
      });
    }
  }
});
