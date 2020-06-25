'use strict';

const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

// listando os post
exports.get = (req, res, next) => {
    Blog.find({}, 'nome sobrenome email post').then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

// criar um post
exports.post = (req, res, next) => {
    var blog = new Blog(req.body);
    blog.save().then(x => {
        res.status(201).send({ messagem: 'Post criado com sucesso' });
    }).catch(e => {
        res.status(400).send({ messagem: 'Falha ao criar o post', data: e });
    });
};

// Atualizar um post
exports.put = (req, res, next) => {
    Blog.findByIdAndUpdate(req.params.id, {
        $set: {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            post: req.body.post
        }
    }).then(x => {
        res.status(201).send({ mensagem: 'Post atualizado com sucesso' });
    }).catch(e => {
        res.status(400).send({ mensagem: 'Falha em atualizar o post', data: e });
    });
};

// Remover um post
exports.delete = (req, res, next) => {
    Blog.findByIdAndRemove(req.body.id).then(x => {
        res.status(201).send({ mensagem: 'Post removido com sucesso' });
    }).catch(e => {
        res.status(400).send({ mensagem: 'Falha em remover o post', data: e });
    });
};


