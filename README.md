# ProductManager-API2
# ProductManager API

## Nome do Sistema

**ProductManager API**

## Objetivo da Aplicação

O ProductManager API é uma aplicação desenvolvida para realizar o gerenciamento de produtos de uma empresa. O sistema permite cadastrar, consultar, atualizar e remover produtos através de uma API REST, utilizando Node.js, Express e MySQL.

## Descrição da Solução

A aplicação foi criada para solucionar o problema de organização e controle de informações de produtos. Através da API, usuários podem realizar operações de cadastro, consulta, alteração e exclusão de produtos armazenados em um banco de dados MySQL.

O sistema possui regras de negócio para garantir maior organização dos dados e evitar informações duplicadas.

## Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* MySQL2
* Git
* GitHub
* Insomnia/Postman para testes da API

## Estrutura do Projeto

```
ProductManager/

├── controllers/
│   └── produtoController.js
│
├── routes/
│   └── produtoRoutes.js
│
├── database/
│   └── conexao.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Como Instalar as Dependências

Após baixar o projeto, abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Esse comando irá instalar todas as dependências necessárias para executar a aplicação.

## Configuração do Banco de Dados

Crie um banco de dados MySQL chamado:

```sql
produtos_api
```

Depois crie a tabela:

```sql
CREATE TABLE produtos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    status VARCHAR(30) NOT NULL
);
```

Também é necessário configurar o arquivo:

```
database/conexao.js
```

Informando usuário, senha e banco de dados do MySQL.

## Como Executar a Aplicação

Para iniciar o servidor, execute:

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3000
```

## Rotas Disponíveis

### Listar produtos

**GET**

```
/produtos
```

Retorna todos os produtos cadastrados.

---

### Cadastrar produto

**POST**

```
/produtos
```

Exemplo de envio:

```json
{
    "nome": "Notebook",
    "categoria": "Eletrônicos",
    "preco": 2500,
    "quantidade": 10
}
```

---

### Atualizar produto

**PUT**

```
/produtos/:id
```

Atualiza as informações de um produto existente.

---

### Excluir produto

**DELETE**

```
/produtos/:id
```

Remove um produto cadastrado.

## Regra de Negócio Criada

O sistema possui as seguintes regras:

* Não permite cadastrar produtos com o mesmo nome e categoria.
* Caso a quantidade do produto seja igual a zero, o sistema altera automaticamente o status para "Indisponível".
* Campos obrigatórios devem ser preenchidos antes do cadastro.

## Versionamento

O projeto foi desenvolvido utilizando Git e GitHub, contendo histórico de commits com a evolução da aplicação.

Exemplos de commits realizados:

* Criando estrutura inicial do projeto
* Configurando servidor Express
* Criando conexão com MySQL
* Implementando operações CRUD
* Finalizando documentação README

## Integrantes da Equipe

* Integrante 01: Maria Luiza
* Integrante 02: Efraim
* Integrante 03: Grazielle

## Conclusão

O projeto demonstra a aplicação dos conceitos de Backend utilizando Node.js, Express e MySQL, criando uma API REST organizada, funcional e integrada a um banco de dados.
