const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const app = express();

// Serve static files from both build and public directories
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html from public directory if build directory is empty
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 55555;

// Check if SSL certificates exist
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'private.key')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'certificate.crt'))
};

// Start both HTTP and HTTPS servers
app.listen(port, '0.0.0.0', () => {
  console.log(`HTTP Server is running on port ${port}`);
  console.log(`Access the app at http://localhost:${port}`);
});

https.createServer(sslOptions, app).listen(port + 1, '0.0.0.0', () => {
  console.log(`HTTPS Server is running on port ${port + 1}`);
  console.log(`Access the secure app at https://localhost:${port + 1}`);
}); 