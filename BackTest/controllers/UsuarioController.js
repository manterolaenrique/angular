'use strict'

var Cliente = require('../models/usuario');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const login_usuario = async function (req, res) {
    var data = req.body;
    var cliente_arr = [];
    cliente_arr = await Cliente.find({ email: data.email })
    if (cliente_arr.length == 0) {
        res.status(200).send({ message: "No se encontro el correo", data: undefined });
    } else {
        //login
        let user = cliente_arr[0];
        bcrypt.compare(data.password, user.password, async function (error, check) {
            if (check) {
                res.status(200).send({
                    data: user,
                    token: jwt.createToken(user)
                });
            } else {
                res.status(200).send({ message: "la contraseña no conincide", data: undefined });
            }
        })
    }
}

const test = async function (req, res) {
    var data = req.body;
    console.log(data);
}

const registro_usuario = async function (req, res) {
    console.log(req.query)
    var data = req.body;
    console.log(data)
    var clientes_arr = [];
    clientes_arr = await Cliente.find({ email: data.email });
    console.log("Entre")
    if (clientes_arr.length == 0) {
        if (data.password) {
            bcrypt.hash(data.password, null, null, async function (err, hash) {
                if (hash) {
                    data.password = hash
                    var reg = await Cliente.create(data);
                    res.status(200).send({ data: reg });
                } else {
                    res.status(200).send({ message: 'ErrorServer', data: undefined });
                }
            })
        } else {
            res.status(200).send({ message: 'no hya una contraseña', data: undefined });
        }
    } else {
        res.status(200).send({ message: 'El correo ya existe en la base de datos', data: undefined });
    }
}


module.exports = {
    login_usuario,
    registro_usuario,
    test
}