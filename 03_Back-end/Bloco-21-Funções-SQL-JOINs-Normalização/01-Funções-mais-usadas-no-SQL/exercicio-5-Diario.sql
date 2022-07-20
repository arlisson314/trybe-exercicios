-- Active: 1658273779375@@127.0.0.1@3306@hr

-- 1 Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) AS higher_salary FROM employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) MOD MIN(salary) FROM employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
SELECT job_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY job_id
ORDER BY avg_salary DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) AS custo_total
FROM employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT
MAX(salary) AS maior_salario,
MIN(salary) AS menor_salario,
SUM(salary) AS custo_total,
ROUND(AVG(salary), 2) AS media_salarial
FROM employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).
SELECT COUNT(job_id) AS quantidade_pessoas_programadoras
FROM employees
WHERE job_id = "it_prog";

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
SELECT job_id, COUNT(salary)