
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Weather = require('../models/Weather.js');

/* GET ALL WEATHERS */
router.get('/', function(req, res, next) {
  Weather.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE WEATHER BY ID */
router.get('/:id', function(req, res, next) {
  Weather.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE WEATHER */
router.post('/', function(req, res, next) {
  Weather.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE WEATHER */
router.put('/:id', function(req, res, next) {
  Weather.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE WEATHER */
router.delete('/:id', function(req, res, next) {
  Weather.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

