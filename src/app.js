//Aplication settings
const express   = require('express');
const app       = express();
const path      = require('path');
const router    = require('./router');

require('dotenv').config();
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(router);

module.exports = app;