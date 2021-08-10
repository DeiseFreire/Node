/**
 * LIMA, Victor. Curso de node.js: Rotas #07.  * 21 nov. 2018, 06 dec. 2018. 63 p. Notas
 * de Aula. No prelo.
 */

/**
 * var express = require("express");
 * var app = express();
 */

const express = require("express");
const app = express();
app.get("/", function(req, res) {
    res.send("Seja bem-vindo ao meu app!")
});
app.get("/sobre", function(req, res) {
    res.send("Minha pagina sobre");
});
app.get("/blog", function(req, res) {
    res.send("Bem-vindo ao meu blog!");
});

app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});
