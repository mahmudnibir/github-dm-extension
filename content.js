const observer = new MutationObserver(() => {
  const profileHeader = document.querySelector(".vcard-details");

  if (profileHeader && !document.getElementById("github-dm-btn")) {
      // Create the message button
      const messageBtn = document.createElement("button");
      messageBtn.id = "github-dm-btn";
      messageBtn.innerText = "Message";
      messageBtn.style.cssText = "margin-top:10px;padding:6px 12px;background:#2ea44f;color:white;border:none;border-radius:4px;cursor:pointer;";

      // Append the button
      profileHeader.appendChild(messageBtn);

      // Log to verify if button is created
      console.log("Message button added:", messageBtn);  // Add this line to check if button is created.

      // On click, open the popup
      messageBtn.onclick = function () {
          console.log("Message button clicked!"); // Log for click event
          chrome.runtime.sendMessage({ action: "open_popup" });
      };

      observer.disconnect(); // Stop observing once button is added
  }
});

observer.observe(document.body, { childList: true, subtree: true });
