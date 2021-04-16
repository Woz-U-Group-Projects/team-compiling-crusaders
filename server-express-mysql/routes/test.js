var express = require('express');
var router = express.Router();
var models = require('../models');
var mysql = require('mysql2');

router.get('/userData', (req, res, next) => {
    models.users
    .findAll({include: [{ model: models.blogposts }]})
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    });
  });

  module.exports = router;