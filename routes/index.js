const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Caleb Hansen');
});

module.exports = routes;