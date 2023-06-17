CREATE TABLE produtos (
     codigo serial,
     titulo text,
     data_cadastro date,
     preco integer,
     descrição text,
     imagem text
     
)

INSERT INTO produtos (titulo, data_cadastro, preco, descrição, imagem)
VALUES
    ('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor vermelho agro', 'imagem/deck1.png'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor preto toque mortifero', 'imagem/aqui'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco aura', 'imagem/aqui'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco marcador', 'imagem/aqui'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor verde estouro', 'imagem/aqui'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco soldado', 'imagem/aqui'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor azul', 'imagem/aqui'),
	('Óculos de Realidade Virtual', '20200505', 2500, 'Óculos de Realidade Aumentada que proporciona uma experiência imersiva', 'imagem/aqui'),
	('Sabre de luz', '20230505', 50, 'Sabre de Luz do Star Wars de brinquedo', 'imagem/aqui'),
	('Caneca do Batman', '20210607', 100, 'Caneca do Batman cavalheiro das trevas', 'imagem/aqui'),
	('Kit de 7 dados Personalizados', '20230427', 18, 'Kit de dados de RPG Tormenta20', 'imagem/aqui'),
	('Kit de 7 dados Personalizados', '20230426', 20, 'Kit de dados de RPG Ordem', 'imagem/aqui'),
	('Kit de 7 dados Personalizados', '20230425', 22, 'Kit de dados de RPG Cthulhu', 'imagem/aqui'),
	('Kit de 7 dados Personalizados', '20230426', 22, 'Kit de dados de RPG D&D', 'imagem/aqui'),
	('Livro de regras Tormenta20', '20190212', 120, 'Livro de regras de RPG para Tormenta20', 'imagem/aqui'),
	('Livro de regras Ordem', '20220427', 110, 'Livro de regras de RPG para Ordem', 'imagem/aqui'),
	('Livro de regras Cthulhu', '20150513', 85, 'Livro de regras de RPG para Cthulhu', 'imagem/aqui'),
	('Livro de regras D&D', '20120605', 199.9, 'Livro de regras de RPG para D&D', 'imagem/aqui'),
	('Token de RPG', '20170813', 35, 'Tokens de personagem para RPG de mesa', 'imagem/aqui'),
	('Cenário personalizado para RPG', '20170814', 75, 'Cenário personalizado para ser utilizado em um RPG de mesa', 'imagem/aqui');
