# ProductManager API

## 1. Nome do Projeto

ProductManager API

## 2. Objetivo

O projeto consiste no desenvolvimento e na realização de testes de uma API REST para gerenciamento de produtos.

Nesta etapa, foi realizada a homologação da API utilizando o Postman, simulando o trabalho de uma equipe de Desenvolvimento Backend e Quality Assurance (QA).

O objetivo dos testes foi verificar o funcionamento das rotas, validar as respostas da API, verificar os códigos de status HTTP e identificar possíveis falhas no tratamento de dados inválidos e erros.

## 3. Integrantes da Equipe

- Julia Abreu
- Nicolle Borges

## 4. Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- MySQL
- Postman
- GitHub

## 5. Ferramenta Utilizada nos Testes

Os testes da API foram realizados utilizando o Postman.

A API foi executada localmente na porta 3000.

URL base:

http://localhost:3000

## 6. Rotas Testadas

| Método | Rota | Descrição |
|---|---|---|
| GET | /produtos | Lista todos os produtos |
| GET | /produtos/:id | Consulta um produto pelo ID |
| POST | /produtos | Cadastra um novo produto |
| PUT | /produtos/:id | Atualiza um produto |
| DELETE | /produtos/:id | Exclui um produto |

## 7. Testes Realizados

### 7.1 Cadastro de Produto

Foi realizado um teste utilizando o método POST para cadastrar um novo produto.

Rota:

POST /produtos

Exemplo de dados enviados:

{
    "nome": "Notebook",
    "categoria": "Eletronicos",
    "preco": 2500,
    "quantidade": 10
}

Resultado:

O produto foi cadastrado corretamente e a API retornou uma mensagem de confirmação juntamente com o ID gerado pelo banco de dados.

Status HTTP obtido:

200 OK

Resultado do teste: APROVADO.

---

### 7.2 Consulta de Todos os Produtos

Foi realizado um teste utilizando o método GET para consultar todos os produtos cadastrados.

Rota:

GET /produtos

O objetivo foi verificar se a API retorna corretamente os registros armazenados no banco de dados.

Resultado do teste: APROVADO.

---

### 7.3 Consulta de Produto por ID

Foi adicionada e testada a rota:

GET /produtos/:id

Exemplo:

GET /produtos/3

A rota permite consultar um produto específico utilizando seu identificador.

Também foi realizado um teste utilizando um ID inexistente.

Exemplo:

GET /produtos/1

Quando o produto não existe, a API retorna:

{
    "mensagem": "Produto não encontrado!"
}

Status HTTP:

404 Not Found

Resultado do teste: APROVADO.

O tratamento de ID inexistente foi identificado e a API apresentou uma resposta adequada.

---

### 7.4 Atualização de Produto

Foi realizado um teste utilizando o método PUT para atualizar informações de um produto.

Rota:

PUT /produtos/:id

Foram enviados novos valores para os campos do produto.

A API retornou a mensagem:

"Produto atualizado!"

Status HTTP:

200 OK

Resultado do teste: APROVADO para registros existentes.

---

### 7.5 Exclusão de Produto

Foi realizado um teste utilizando o método DELETE para excluir um produto.

Rota:

DELETE /produtos/:id

Após a exclusão, foi realizada uma nova consulta pelo ID para verificar se o registro havia sido removido.

Resultado do teste: APROVADO.

---

# 8. Testes de Dados Inválidos

## 8.1 Campo Obrigatório Vazio

Foi realizado um teste enviando o campo nome vazio.

Dados enviados:

{
    "nome": "",
    "categoria": "Eletronicos",
    "preco": 2500,
    "quantidade": 10
}

A API aceitou a requisição e retornou o status:

200 OK

Resultado:

FALHA IDENTIFICADA.

A API permitiu o cadastro mesmo com o campo nome vazio. O comportamento esperado seria rejeitar a requisição e retornar um código de erro, como 400 Bad Request.

---

## 8.2 ID Inexistente

Foi realizado um teste utilizando um ID inexistente.

Exemplo:

PUT /produtos/99999

A API retornou:

{
    "mensagem": "Produto atualizado!"
}

Status HTTP:

200 OK

Resultado:

FALHA IDENTIFICADA.

A API informou que o produto foi atualizado mesmo utilizando um ID inexistente. O comportamento esperado seria retornar 404 Not Found.

---

## 8.3 Dados com Tipo Inválido

Foi realizado um teste enviando valores inválidos para campos numéricos.

Dados enviados:

{
    "nome": "Produto Inválido",
    "categoria": "Teste",
    "preco": "abc",
    "quantidade": "xyz"
}

A API retornou:

500 Internal Server Error

Também foi identificado o erro:

ER_TRUNCATED_WRONG_VALUE_FOR_FIELD

Resultado:

FALHA DE TRATAMENTO IDENTIFICADA.

A API rejeitou os dados inválidos, porém retornou o código 500. O mais adequado seria realizar a validação dos dados antes da consulta ao banco e retornar 400 Bad Request.

---

# 9. Resumo dos Resultados

| Teste | Método | Resultado |
|---|---|---|
| Cadastro de produto | POST | APROVADO |
| Consulta de produtos | GET | APROVADO |
| Consulta por ID | GET | APROVADO |
| Atualização | PUT | APROVADO |
| Exclusão | DELETE | APROVADO |
| Campo obrigatório vazio | POST | FALHA IDENTIFICADA |
| ID inexistente | PUT | FALHA IDENTIFICADA |
| Dados inválidos | POST | FALHA DE TRATAMENTO IDENTIFICADA |

# 10. Conclusão

Os testes realizados no Postman permitiram verificar o funcionamento das principais rotas da ProductManager API.

As operações de cadastro, consulta, atualização e exclusão foram testadas. Também foram realizados testes de situações inválidas, como campos vazios, IDs inexistentes e envio de dados com tipos incompatíveis.

Durante a homologação foram identificadas falhas relacionadas à validação dos dados e ao tratamento de alguns erros.

Os resultados encontrados foram registrados nas evidências dos testes e poderão ser utilizados como pontos de melhoria para aumentar a confiabilidade, segurança e qualidade da API.

# 11. Evidências

As capturas de tela dos testes realizados estão reunidas no arquivo:

postman/evidencias.pdf

As evidências apresentam:

- Requisição realizada;
- Método HTTP;
- URL;
- Body enviado;
- Resposta da API;
- Código de status HTTP.

# 12. Collection do Postman

A Collection utilizada nos testes está disponível em:

postman/collection.json

# 13. Estrutura do Projeto

ProductManager-API2/

├── controllers/

├── database/

├── routes/

├── postman/

│   ├── collection.json

│   └── evidencias.pdf

├── README.md

├── package.json

└── ...