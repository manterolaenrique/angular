'use strict'

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.port || 4201;

var usuario_route = require('./routes/usuario');

async function conectarBaseDeDatos() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/angularTest');
        console.log('Conexión exitosa a la base de datos');
        console.log(`Servidor escuchando en http://localhost:${port}`);
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error.message);
    }
}

conectarBaseDeDatos();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({limit:'50mb',express:true}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});
//dar permiso a los cors, para mandar cosas del front-end al back-end

app.use('/api', usuario_route);


// PONER SEVIDOR A ESCUCHAR PETICIONES HTTP
app.listen(port,()=>{
    console.log("Servidor de node corriendo en el puerto:  ", port);
}) 

module.exports = app;