'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    email: {type: String, required:true},
    password: {type: String, required:true},
});

module.exports = mongoose.model('usuario', UsuarioSchema);