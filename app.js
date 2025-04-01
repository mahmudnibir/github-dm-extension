// app.js

const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const app = express();
const port = 8080;

dotenv.config();  // Load environment variables from .env file

// GitHub OAuth details
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:8080/auth/callback";

// Route to handle the callback from GitHub
app.get("/auth/callback", async (req, res) => {
  const { code } = req.query;
  
  if (!code) {
    return res.send("No code received, something went wrong with the OAuth flow.");
  }

  try {
    // Exchange the code for an access token
    const response = await axios.post(
      "https://github.com/login/oauth/access_token",
      null,
      {
        params: {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          redirect_uri: REDIRECT_URI,
        },
        headers: {
          Accept: "application/json",
        },
      }
    );

    const { access_token } = response.data;

    if (access_token) {
      res.send("Authentication successful! You can now use your access token.");
    } else {
      res.send("Authentication failed. Please try again.");
    }
  } catch (error) {
    console.error("Error during OAuth token exchange:", error);
    res.send("Error during authentication. Please check the server logs.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
