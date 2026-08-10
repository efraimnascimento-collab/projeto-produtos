USE ecommerce_db;

-- Inserção de clientes
INSERT INTO clientes (nome, email, telefone, endereco) VALUES
('Grazielle Miranda', 'grazi@gmail.com', '71911111111', 'Rua A'),
('Efraim Nascimento', 'Efraim@gmail.com', '71922222222', 'Rua B'),
('Maria Luiza', 'marialuiza@gmail.com', '71933333333', 'Rua C'),
('Nicolle Borges', 'Nicolle@gmail.com', '71944444444', 'Rua D'),
('Julia Abreu', 'Julia@gmail.com', '71955555555', 'Rua E'),
('Fernanda Costa', 'fernanda@gmail.com', '71966666666', 'Rua F'),
('Gabriel Santos', 'gabriel@gmail.com', '71977777777', 'Rua G'),
('Helena Oliveira', 'helena@gmail.com', '71988888888', 'Rua H'),
('Igor Pereira', 'igor@gmail.com', '71999999999', 'Rua I'),
('Juliana Martins', 'juliana@gmail.com', '71910101010', 'Rua J');

-- Inserção de categorias
INSERT INTO categorias (nome) VALUES
('Eletrônicos'),
('Informática'),
('Celulares'),
('Livros'),
('Roupas'),
('Calçados'),
('Esportes'),
('Casa'),
('Beleza'),
('Brinquedos');

-- Inserção de produtos
INSERT INTO produtos (nome, preco, estoque, id_categoria) VALUES
('Notebook', 3500.00, 20, 2),
('Mouse', 80.00, 50, 2),
('Teclado', 150.00, 40, 2),
('Smartphone', 2200.00, 30, 3),
('Tênis', 300.00, 25, 6),
('Camiseta', 70.00, 80, 5),
('Livro SQL', 120.00, 15, 4),
('Bola Futebol', 90.00, 35, 7),
('Liquidificador', 250.00, 18, 8),
('Perfume', 180.00, 22, 9);

-- Inserção de pedidos
INSERT INTO pedidos (data_pedido, id_cliente, total) VALUES
('2026-08-01', 1, 3580.00),
('2026-08-02', 2, 2200.00),
('2026-08-02', 3, 150.00),
('2026-08-03', 4, 300.00),
('2026-08-03', 5, 70.00),
('2026-08-04', 6, 120.00),
('2026-08-04', 7, 90.00),
('2026-08-05', 8, 250.00),
('2026-08-05', 9, 180.00),
('2026-08-06', 10, 80.00);

-- Inserção dos itens dos pedidos
INSERT INTO itens_pedido
(id_pedido, id_produto, quantidade, preco_unitario) VALUES
(1, 1, 1, 3500.00),
(1, 2, 1, 80.00),
(2, 4, 1, 2200.00),
(3, 3, 1, 150.00),
(4, 5, 1, 300.00),
(5, 6, 1, 70.00),
(6, 7, 1, 120.00),
(7, 8, 1, 90.00),
(8, 9, 1, 250.00),
(9, 10, 1, 180.00);

-- Consultas
SELECT * FROM clientes;

SELECT * FROM categorias;

SELECT * FROM produtos;

SELECT * FROM pedidos;

SELECT * FROM itens_pedido;

SELECT * FROM produtos
WHERE preco > 100;

SELECT * FROM clientes
LIMIT 5;

SELECT * FROM produtos
ORDER BY preco DESC;

-- Atualização de produto
UPDATE produtos
SET preco = 99.90
WHERE id_produto = 2;

SELECT * FROM produtos;

-- Inserção de cliente para teste
INSERT INTO clientes (nome, email, telefone, endereco)
VALUES ('Cliente Teste', 'teste@gmail.com', '71900000000', 'Rua Teste');

-- Exclusão do cliente de teste
DELETE FROM clientes
WHERE email = 'teste@gmail.com';

SELECT * FROM clientes;