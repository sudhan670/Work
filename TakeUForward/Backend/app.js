// app.js
var express = require('express');
var snippetsRouter = require('./routes/snippets');

var app = express();

// Mount the snippetsRouter at the /snippets route
app.use('/snippets', snippetsRouter);

module.exports = app;
