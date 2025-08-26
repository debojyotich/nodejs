const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static("public"));

// Route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Route for about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
