const express = require('express');
const token = require('./middlewares/token');

const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/login', LoginController.login, token.addingToken);

module.exports = routes;
