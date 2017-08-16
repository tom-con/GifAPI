const express = require('express');
const router = express.Router();
const gifs = require('../api/gifsData')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send(gifs)
});

router.get('/:query', function(req,res,next) {
  res.send(req.params.query);
})

module.exports = router;
