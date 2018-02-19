var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

var config = require('./config'); 

mongoose.connect(config.database);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', require('./app/routes'));
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next('Not found');
});


var server = app.listen(config.port, function () {
    console.log('Server Running on :' + config.port);
});




// var server = app.listen(config.port, config.ip, function () {
//     console.log('Server Running on : ' + config.ip + ':' + config.port);
// });

// 127.0.0.1:8081/api/auth/register
// 127.0.0.1:8081/api/auth/login
