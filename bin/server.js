'use strict'

// SERVIDOR WEB 

// Importando
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
const { Console } = require('console');

// Setando a porta
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Criando o servidor - rotas
const server = http.createServer(app);

// Servidor fica ouvindo a porta
server.listen(port);

// Chamando o método onError
server.on('error', onError);

// Chamando o método onListening
server.on('listening', onListening);

// Imprime a porta que está sendo utilizada
console.log('Api rodando na porta: ' + port);

// Normalizando a porta - função
function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

// Tratativa de erro - caso a porta esteja ocupada
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port == 'string' ?
       'Pipe ' + port :
       'Port ' + port;
    
    switch(error.code){
        // verifica se existe um erro de permição
        case 'EACCES':
            console.error(bind + 'Requer elevado privilégio');
            process.exit(1);
            break;
        // verifica se é erro de endereço em uso
        case 'EADDRINUSE':
            console.error(bind + 'Já está em uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Start debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe' + addr
    : 'port' + addr.port;
    debug('listening on' + bind);
}