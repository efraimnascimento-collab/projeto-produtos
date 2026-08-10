const conexao = require("../database/conexao");

exports.listar = (req, res) => {

    const sql = "SELECT * FROM produtos";

    conexao.query(sql, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });
};


// BUSCAR PRODUTO POR ID
exports.buscarPorId = (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM produtos WHERE id=?";

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        if (resultado.length === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado!"
            });
        }

        res.json(resultado[0]);

    });
};


exports.cadastrar = (req, res) => {

    console.log(req.body); // serve para testar se o Postman está enviando os dados

    const { nome, categoria, preco, quantidade, status } = req.body;

    const sql = `
        INSERT INTO produtos 
        (nome, categoria, preco, quantidade, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [nome, categoria, preco, quantidade, status],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: "Produto cadastrado!",
                id: resultado.insertId
            });

        }
    );
};


exports.atualizar = (req, res) => {

    const id = req.params.id;

    const { nome, categoria, preco, quantidade, status } = req.body;

    const sql = `
        UPDATE produtos SET
        nome=?,
        categoria=?,
        preco=?,
        quantidade=?,
        status=?
        WHERE id=?
    `;

    conexao.query(
        sql,
        [nome, categoria, preco, quantidade, status, id],
        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: "Produto atualizado!"
            });

        }
    );
};


exports.deletar = (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM produtos WHERE id=?";

    conexao.query(sql, [id], (erro) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json({
            mensagem: "Produto excluído!"
        });

    });
};