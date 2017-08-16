const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

const gifs = require('./routes/gifs');

// Sets up a logger for the server to see incoming REQ and outoging RES
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


// Allows calling directories without exact flepaths for node_modules and to serve the public folder
app.use(express.static(path.resolve(__dirname, '../client', 'build')));

// Routes for the API and then a wildcard route to serve up the React build
app.use('/api/gifs', gifs);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
