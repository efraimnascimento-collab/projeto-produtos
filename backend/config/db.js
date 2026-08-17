const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "empresa"
});

conexao.connect((erro) => {
  if (erro) {
    console.log("Erro ao conectar ao banco:", erro);
    return;
  }
  console.log("Conectado ao banco de dados!");
});

module.exports = conexao;