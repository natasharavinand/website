const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/writings', function(req, res) {
    res.render('writings');
});

app.listen(3000);
