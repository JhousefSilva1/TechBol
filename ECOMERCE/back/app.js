'use strict'

var express = require('express');
var app = express();
var bodypasr = require('body-parser');
var mongoose = require ('mongoose');
var port = process.env.PORT || 4201;


mongoose.connect('mongodb://127.0.0.1:27017/BolTech',(err, res)=>{ //creamos un error y una respuesta
    if(err){
        console.log(err);//muestra el error
    }
    else{
        console.log('Servidor corriendo');
        app.listen(port, function(){
            console.log('Servidor corriendo en el puerto '+port);
        })
    }
})

//exportando app
module.exports = app;