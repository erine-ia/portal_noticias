const express = require('express');
const consign = require('consign')
const app = express();


app.set('view engine', 'ejs');
app.set('views', './app/views')


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


consign()
    .include('app/routers')
    .then('config/db.js')
    .then('app/models')
    .into(app);

module.exports = app