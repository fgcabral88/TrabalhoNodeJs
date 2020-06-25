'use strict'

const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta no banco mlab mongodb
mongoose.connect('mongodb+srv://fgcabral:unicuritiba@cluster0-olfft.gcp.mongodb.net/node?retryWrites=true&w=majority');

// Carrega os models
const Blog = require('./models/Blog');

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const blogRoute = require('./routes/blog-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


// Atribuindo a rota no app
app.use('/', indexRoute);
app.use('/blog', blogRoute);

// Exportando a aplicação
module.exports = app;