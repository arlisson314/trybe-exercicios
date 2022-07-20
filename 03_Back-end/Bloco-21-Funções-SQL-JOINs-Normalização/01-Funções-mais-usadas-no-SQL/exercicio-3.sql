-- Active: 1658273779375@@127.0.0.1@3306@sakila
-- Desafios com DIV e MOD

-- 1 Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF(MOD(15, 2) = 0, 'Par', 'Ímpar' ) AS 'Par ou Ímpar';

-- 2 Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;

-- 3 Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220-18*12;

-- Para fixar
-- 1 Monte uma query que gere um valor entre 15 e 20.
SELECT ROUND(15 + (RAND() * 5));

-- 2 Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5);

-- 3 Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);

-- 4 Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);

-- Para fixar, responda como seria possível encontrar as seguintes informações:

-- 1 Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

-- 2 Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('10:25:45', '11:00:00');


-- Para praticar, vamos encontrar algumas informações sobre os filmes cadastrados em nossa base de dados.
-- 1 Monte um query que exiba:

-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT ROUND(AVG(length), 2) AS 'Média de Duração' FROM sakila.film;

-- A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) as 'Duração Mínima' FROM sakila.film;

-- A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) as 'Duração Maxima' FROM sakila.film;

-- A soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;

-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(film_id) AS 'Filmes Registrados' FROM sakila.film;

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT active, COUNT(customer_id)
FROM sakila.customer
GROUP BY active;

-- 2 Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT store_id, active, COUNT(customer_id)
FROM sakila.customer
GROUP BY store_id, active;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(address_id)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(address_id) DESC;
