const express = require('express');
const router = express.Router();
const gifs = require('../api/gifsData')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send(gifs)
});

router.get('/random', function(req,res,next) {
  res.send([gifs[Math.floor(Math.random() * gifs.length)]]);
})

module.exports = router;
