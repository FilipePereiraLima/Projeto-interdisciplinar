CREATE TABLE produtos {
     codigo serial,
     titulo text,
     data_cadastro date,
     preco integer,
     descrição text,
     imagem text
     
}

INSERT INTO produtos (titulo, data_cadastro, preco, descrição, imagem)
VALUES
    ('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor vermelho agro ', 'imagem/deck1.png' ),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor preto toque mortifero', 'imagemaqui' ),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco aura', 'imagemaqui' ),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco marcador', 'imagemaqui' ),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor verde estouro', 'imagemaqui' ),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco soldado', 'imagemaqui' ),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor azul', 'imagemaqui' ),
	('Óculos de Realidade Virtual', '20200505', 2500, 'Óculos de Realidade Aumentada que proporciona uma experiência imerciva', 'imagemaqui' ),
	('Sabre de luz', '20230505', 50, 'Sabre de Luz do StarWars de brinquedo', 'imagemaqui' ),
	('Caneca do Batman', '20210607', 100, 'Caneca do batman cavalheiro das trevas', 'imagemaqui' ),
	('Kit de 7 dados Personalizados', '20230427', 18, 'Kit de dados de rpg Tormenta20', 'imagemaqui' ),
	('kit de 7 dados Personalizados', '20230426', 20, 'kit de dados de rpg Ordem', 'imagemaqui' ),
	('kit de 7 dados Personalizados', '20230425', 22, 'kit de dados de rpg Cthullu', 'imagemaqui' ),
	('kit de 7 dados Personalizados', '20230426', 22, 'kit de dados de rpg D&d', 'imagemaqui' ),
	('livro de regras Tormenta20', '20190212', 120, 'livro de regras de rpg para Tormenta20', 'imagemaqui' ),
	('livro de regras Ordem', '20220427', 110, 'livro de regras de rpg para Ordem', 'imagemaqui' ),
	('livro de regras Cthullu', '20150513', 85, 'livro de regras de rpg para Cthullu', 'imagemaqui' ),
	('livro de regras D&d', '20120605', 199.9, 'livro de regras de rpg para D&d', 'imagemaqui' ),
	('Token de rpg', '20170813', 35, 'Tokens de personagem para rpg de mesa', 'imagemaqui' ),
	('Cenario personalizado para rpg', '20170814', 75, 'cenario personalizado para ser utilizado em um rpg de mesa', 'imagemaqui' ),

