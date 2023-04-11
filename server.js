// Import the express and fetch libraries
const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

// Create a new express application
const app = express();

// Send a JSON response to a default get request
app.get("/ping", async (req, res) => {
  console.log(process.env.KEYSTRING);

  const requestOptions = {
    method: "GET",
    headers: {
      "x-api-key": process.env.KEYSTRING,
    },
  };

  const response = await fetch(
    "https://api.etsy.com/v3/application/openapi-ping",
    requestOptions
  );

  if (response.ok) {
    const data = await response.json();
    res.send(data);
  } else {
    res.send("oops");
  }
});

// Start the server on port 3003
const port = 3003;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
