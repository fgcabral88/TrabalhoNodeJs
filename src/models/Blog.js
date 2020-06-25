'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Criando um novo Schema
const schema = new Schema({
    nome:{
        type: String,
        required: [true, 'O nome é obrigatório']
    },
    sobrenome:{
        type: String,
        required: [true, 'O sobrenome é obrigatório']
    },
    email:{
        type: String,
        required: [true, 'O e-mail é obrigatório']
    },
    post:{
        type: String,
        required: [true, 'O post é obrigatório']
    },
});

// Exportando o Schema
module.exports = mongoose.model('Blog', schema);