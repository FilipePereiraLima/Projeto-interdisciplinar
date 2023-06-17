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
    ('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor vermelho agro', 'https://www.playeasy.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/e/deck-3.jpg'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor preto toque mortifero', 'https://m.media-amazon.com/images/I/619gFwngEOL._AC_UF894,1000_QL80_.jpg'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco aura', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYqKgVLw6wKAT-hmGlNoYlIgZf2Z1OIjK0qlH5W2NDvmV8EfxaL-TLBLIT7V0kSOgVAE&usqp=CAU'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco marcador', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYqKgVLw6wKAT-hmGlNoYlIgZf2Z1OIjK0qlH5W2NDvmV8EfxaL-TLBLIT7V0kSOgVAE&usqp=CAU'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor verde estouro', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6K1AQ_ILBgO9yfxYEHv5EpYFx_li-d5xiCYI5JYYv1jHX_piLJ1FYUtN9l3Hw1K_6OA&usqp=CAU'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor branco soldado', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYqKgVLw6wKAT-hmGlNoYlIgZf2Z1OIjK0qlH5W2NDvmV8EfxaL-TLBLIT7V0kSOgVAE&usqp=CAU'),
	('Deck de Magic the Gathering', '20210607', 25, 'Deck pronto unica cor azul', 'https://media.auchan.fr/e99dc3f3-a4cb-47aa-a18b-766b00ab294c_512x512/B2CD/'),
	('Óculos de Realidade Virtual', '20200505', 2500, 'Óculos de Realidade Aumentada que proporciona uma experiência imersiva', 'https://s2-techtudo.glbimg.com/LJJNQO2gCf0wQQ6SzHqEBq1dX3A=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/m/T/9GakJyRhiKhGmXsNdtag/a-venda-de-verao-do-meta-quest-chegou-economize.jpg'),
	('Sabre de luz', '20230505', 50, 'Sabre de Luz do Star Wars de brinquedo', 'https://m.media-amazon.com/images/I/41ol6fk6bSL._AC_SX679_.jpg'),
	('Caneca do Batman', '20210607', 100, 'Caneca do Batman cavalheiro das trevas', 'https://static3.tcdn.com.br/img/img_prod/352023/caneca_batman_logos_collection_9155_1_d6b45692ebb55aee3dc9ce64708221e7_20220222135644.jpg'),
	('Kit de 7 dados Personalizados', '20230427', 18, 'Kit de dados de RPG Tormenta20', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2MziDz2sZy3mDUcLgY_Q8HBOuEez6P7Ojg&usqp=CAU'),
	('Kit de 7 dados Personalizados', '20230426', 20, 'Kit de dados de RPG Ordem', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OGS6zr5b1PwuXq5zNsAoIiil9Knt8J69fg&usqp=CAU'),
	('Kit de 7 dados Personalizados', '20230425', 22, 'Kit de dados de RPG Cthulhu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXVpgOqIJapA2nHnaVNQ7BCZstOcwyFmKDw&usqp=CAU'),
	('Kit de 7 dados Personalizados', '20230426', 22, 'Kit de dados de RPG D&D', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8d1CHI8IJblcTFA33NK0Aem6m-FQ3hxuCpw&usqp=CAU'),
	('Livro de regras Tormenta20', '20190212', 120, 'Livro de regras de RPG para Tormenta20', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1ufydoZP9Iwu-WyDsH5rtNb21ufmcmNITn6oGCoszkoy5ZWzCxqJoV0IYHo1cA0h1nI&usqp=CAU'),
	('Livro de regras Ordem', '20220427', 110, 'Livro de regras de RPG para Ordem', 'https://jamboeditora.com.br/wp-content/uploads/2021/11/jamboeditora-mockup-livro-f.png?x70832'),
	('Livro de regras Cthulhu', '20150513', 85, 'Livro de regras de RPG para Cthulhu', 'https://repositorio.sbrauble.com/arquivos/up/ecom/prod/t/177650/1655254029_7374364.jpg'),
	('Livro de regras D&D', '20120605', 199.9, 'Livro de regras de RPG para D&D', 'https://images.tcdn.com.br/img/img_prod/1016405/dungeons_and_dragons_5a_edicao_livro_do_jogador_463_1_7e2d4e114e04706af8628b008ba0682d.png'),
	('Token de RPG', '20170813', 35, 'Tokens de personagem para RPG de mesa', 'https://images.tcdn.com.br/img/img_prod/599593/tokens_de_condicoes_e_status_rpg_25459419_1_c60c4adda9f4021f25cf5c015259071f.jpg'),
	('Cenário personalizado para RPG', '20170814', 75, 'Cenário personalizado para ser utilizado em um RPG de mesa', 'https://cdn.awsli.com.br/600x450/488/488895/produto/119250874/b872a5429c.jpg');
