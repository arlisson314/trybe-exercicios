-- 1 Insira um novo funcionário na tabela sakila.staff.
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!

INSERT INTO sakila.staff (
  first_name, last_name, address_id, email,store_id,
  active, username, password, last_update)
  VALUES ('als', 'Nascimento', 7, 'arlisson314@gmail.com', 1, 7, 'Arlisson314', ' ', NOW());
 
--  2 Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff (
  first_name, last_name, address_id, email,store_id,
  active, username, password, last_update)
  VALUES
    ('als', 'Nascimento', 7, 'arlisson314@gmail.com', 1, 7, 'Arlisson314', ' ', NOW()),
    ('als', 'Nascimento', 7, 'arlisson314@gmail.com', 1, 7, 'Arlisson314', ' ', NOW());

-- 3 Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor. 
INSERT INTO sakila.actor(first_name, last_name)
  SELECT first_name, last_name
  FROM sakila.customer
  ORDER BY customer_id
  LIMIT 5;

-- 4 Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name)
VALUES ('arlisson'), ('é muito'), ('lindo');

-- 5 Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id, last_update)
VALUES  (8, 3, NOW());
