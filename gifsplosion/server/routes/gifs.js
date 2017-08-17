const express = require('express');
const router = express.Router();
const request = require('request');
const gifs = require('../api/gifsData')

/* GET home page. */

router.get('/', function(req, res, next) {
  request( `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=10`,
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        let gifs = JSON.parse(body).data;
        gifs.map(gif => ({id: gif.id, url: gif.images.original.url}))
        res.send(gifs);
      }
    }
  )
});

router.get('/best', function(req, res, next) {
  res.send(gifs);
})

router.get('/random', function(req, res, next) {
  request( `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&limit=1`,
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        let gif = JSON.parse(body).data;
        console.log("Getting from random",gif);
        res.send([{id: gif.id, url: gif.image_original_url}]);
      }
    }
  )
})

router.get('/:search', function(req, res, next) {
  request( `http://api.giphy.com/v1/gifs/search?q=${req.body.params}api_key=${process.env.API_KEY}&limit=10`,
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        let gifs = JSON.parse(body).data;
        gifs.map(gif => ({id: gif.id, url: gif.images.original.url}))
        res.send(gifs);
      }
    }
  )
})

module.exports = router;
