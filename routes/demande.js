const express = require('express');
const router = express.Router();
const sequelize = require('../config/config')
const Demande = require('../models/demandes')

/* GET all demandes */
router.get('/', function(req, res, next) {
  Demande.findAll({})
  .then(demande => res.json({
    error: false,
    data: demande
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
  }));
});

module.exports = router;
