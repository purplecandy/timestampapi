// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const timestamp = require('./timestamp')
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.use('/api/timestamp',timestamp);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
