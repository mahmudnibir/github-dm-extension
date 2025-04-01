document.getElementById("login").addEventListener("click", function() {
  console.log("Login button clicked!");

  // Send a message to background.js to start the authentication process
  chrome.runtime.sendMessage({ action: "start_auth" });
});

// Show the message form after login is successful
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "login_success") {
    document.getElementById("login").style.display = "none"; // Hide the login button
    document.getElementById("messageForm").style.display = "block"; // Show the message form
  }
});

// Handle message sending
document.getElementById("sendMessage").addEventListener("click", () => {
  const accessToken = localStorage.getItem("github_access_token"); // Get token from localStorage
  const username = document.getElementById("username").value;
  const repository = document.getElementById("repository").value;
  const message = document.getElementById("message").value;

  if (accessToken && username && repository && message) {
    // Send message to GitHub
    sendMessage(accessToken, username, repository, message);
  } else {
    alert("Please fill in all fields!");
  }
});

// Function to send the message via GitHub API
function sendMessage(accessToken, username, repository, message) {
  fetch(`https://api.github.com/repos/${username}/${repository}/issues`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Message from GitHub DM System",
      body: message
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.id) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  })
  .catch(error => console.error("Error sending message:", error));
}
