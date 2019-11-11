const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));//Trata os dados recebidos
app.use(bodyParser.json());//Traduz pra json

app.use('/',require('routes'));

app.listen(3001);