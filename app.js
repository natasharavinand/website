const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const favicon = require('express-favicon');

const app = express();

app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/about', function(req, res) {
    res.render('about');
});


app.listen(3000);
