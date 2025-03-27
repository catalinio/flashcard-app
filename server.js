const express = require('express');
const path = require('path');
const app = express();

// Serve static files from both build and public directories
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html from public directory if build directory is empty
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Access the app at http://localhost:${port}`);
}); 