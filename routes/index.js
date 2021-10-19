var express = require('express');
var router = express.Router();

// baseURL: http://localhost:5000/api

/* GET home page. */
router.get('/', function(req, res, next) { // baseURL: http://localhost:5000/api
  res.send("Hi");
});

module.exports = router;
