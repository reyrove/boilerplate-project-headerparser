// index.js
// where your node app starts

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for FCC testing
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files from /public
app.use(express.static('public'));

// Serve index.html on root
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Test API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Header Parser API endpoint
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress,
    language,
    software
  });
});

// Start the server
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
