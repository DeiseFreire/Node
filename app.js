/**
 * LIMA, Victor. Curso de node.js: Protocolo HTTP #05. 20 nov. 2018, 06 dec. 2018. 63 p. Notas de Aula. No prelo.
 */

var http = require('http');
http.create.Server(function( /**req, */ res) {
    res.end("Hello world! Welcome my website");
}).listen(8081);
console.log("O Servidor está rodando!")
