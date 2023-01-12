const routes = require('express').Router();


routes.get('/', (req, res) => {
  res.send('Caleb Hansen');
});
routes.use('/contacts', require('./contacts'))

module.exports = routes;