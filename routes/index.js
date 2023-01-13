const routes = require('express').Router();
const express = require('express');


routes.get('/', (req, res) => {
  res.send('Caleb Hansen');
});
routes.use('/contacts', require('./contacts'))

module.exports = routes;