const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const dbRoutes = require('./backend/routes/databaseAccess.js');


app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use('/db', dbRoutes);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


app.get('/ping', function (req, res) {
  return res.send('pong');
});

// DO NOT REMOVE THIS LINE :)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 1337);
