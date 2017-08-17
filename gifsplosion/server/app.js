
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// dotenv to keep API keys secret
require('dotenv').config();

const gifs = require('./routes/gifs');

// Sets up a logger for the server to see incoming REQ and outoging RES in high detail for server admin
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serves from a static build of the react front-end
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Route for the API and then a wildcard route to serve up the React build as index.html
app.use('/api/gifs', gifs);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// This should never be called because of the wildcard route
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler for misplaced routes, should be ignored because of the wildcard
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
