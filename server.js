const express = require("express");
const cors = require("cors");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

app.use(cors());

app.use(express.json()); // ESSA LINHA TEM QUE VIR ANTES DAS ROTAS

app.use(produtoRoutes);

app.get("/", (req, res) => {
    res.send("API funcionando!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});