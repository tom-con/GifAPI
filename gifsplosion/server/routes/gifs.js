const express = require('express');
const router = express.Router();
const request = require('request');
const gifs = require('../api/gifsData')

/* GET home page. */

router.get('/', function(req, res, next) {
  request( `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=5`,
    function(error, response, body) {
      console.log(error);
      if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body))
      }
    }
  )
  res.send(gifs)
});

router.get('/random', function(req, res, next) {
  res.send([gifs[Math.floor(Math.random() * gifs.length)]]);
})

router.get('/:query', function(req, res, next) {})

module.exports = router;
