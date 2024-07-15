require('dotenv').config();
global.appRoot = __dirname.replace(/'\'/g, '/');
const moment = require('moment-timezone');
moment.tz.setDefault(process.env.TIMEZONE);

const express = require('express');
const cors = require('cors');

const routes = require('./config/routes');
// const { handlerErrors } = require("./config/handler");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes.v1);

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(204).end();
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.setHeader('Content-Type', 'application/json');
  return next();
});

// app.use(handlerErrors);

// Ruta por defecto para páginas no encontradas
app.use((req, res) => {
  return res
    .status(404)
    .send({ status: 'ERROR', message: 'Página no encontrada' });
});

module.exports = app;
