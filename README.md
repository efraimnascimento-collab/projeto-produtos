# ProductManager API + Front-End

Sistema de gerenciamento de produtos desenvolvido para a Atividade 04.1 do SENAI Candeias.

A aplicação integra **Front-End, API REST e MySQL**, permitindo realizar o CRUD de produtos diretamente pelo navegador, sem depender do Postman.

## 1. Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Fetch API
- Node.js
- Express
- MySQL
- Postman
- Git e GitHub

## 2. Estrutura do projeto

```text
projeto-produtos/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── produtoController.js
│   ├── routes/
│   │   └── produtoRoutes.js
│   ├── package.json
│   └── server.js
├── database/
│   ├── banco_dados.sql
│   ├── consultas.sql
│   └── tabelas.sql
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── index.html
├── modelos/
├── postman/
├── link_github.txt
└── README.md
```

## 3. Como executar

### 3.1 Banco de dados

Configure o MySQL e confirme que o banco utilizado no arquivo `backend/config/db.js` existe.

Atualmente a conexão está configurada como:

- Host: `localhost`
- Usuário: `root`
- Senha: `1234`
- Banco: `empresa`

> Se sua senha ou banco forem diferentes, altere somente o arquivo `backend/config/db.js`.

Também confira se a tabela `produtos` do seu banco possui os campos utilizados pela API: `id`, `nome`, `categoria`, `preco`, `quantidade` e `status`.

### 3.2 Instalar dependências

Abra o terminal dentro da pasta `backend/`:

```bash
cd backend
npm install
```

### 3.3 Iniciar o Back-End

Ainda dentro de `backend/`:

```bash
node server.js
```

Ou, durante o desenvolvimento:

```bash
npm run dev
```

Quando estiver funcionando, o terminal deverá mostrar:

```text
Servidor rodando em http://localhost:3000
```

### 3.4 Abrir o Front-End

Com o servidor ligado, abra no navegador:

```text
http://localhost:3000
```

O próprio Express entrega a pasta `frontend/`, portanto não é necessário abrir o HTML manualmente.

## 4. Operações CRUD pelo navegador

A interface permite:

| Operação | Ação na interface | Método da API |
|---|---|---|
| Create | Cadastrar produto | POST `/produtos` |
| Read | Listar produtos | GET `/produtos` |
| Update | Editar produto | PUT `/produtos/:id` |
| Delete | Excluir produto | DELETE `/produtos/:id` |

Após cadastrar, editar ou excluir um produto, a tabela é atualizada novamente pela **Fetch API**, mostrando os dados retornados pela API.

## 5. Demonstração para o README

Para cumprir o entregável da Atividade 04.1, grave um GIF ou vídeo curto mostrando esta sequência:

1. Abrir `http://localhost:3000`.
2. Cadastrar um produto pelo formulário.
3. Mostrar o produto aparecendo na tabela.
4. Editar o mesmo produto.
5. Mostrar a alteração na tabela.
6. Excluir o produto.
7. Atualizar a lista e mostrar que ele não aparece mais.
8. Se possível, mostrar no MySQL que o registro foi persistido.

Depois, salve o arquivo, por exemplo, em `docs/demo.gif` e acrescente ao README:

```markdown
## 6. Demonstração Visual

![Demonstração do sistema](docs/demo.gif)
```

## 6. API

A API continua disponível para testes no Postman:

- `GET /produtos`
- `GET /produtos/:id`
- `POST /produtos`
- `PUT /produtos/:id`
- `DELETE /produtos/:id`

URL base:

```text
http://localhost:3000
```

## 7. Equipe

- Efraim
- Grazielle
- Maria Luiza

**Instituição:** SENAI Candeias  
**Professor Orientador:** Adalberto Santana
