'use strict'

var express = require('express');
var usuarioController = require('../controllers/UsuarioController');

var api = express.Router();

api.post('/login_usuario', usuarioController.login_usuario);
api.get('/test', usuarioController.test);
api.post('/registro_usuario', usuarioController.registro_usuario);




module.exports = api;