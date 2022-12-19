const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', './app/views')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app