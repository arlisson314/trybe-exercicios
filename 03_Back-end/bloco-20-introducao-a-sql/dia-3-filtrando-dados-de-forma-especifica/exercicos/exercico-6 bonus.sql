use Scientists;
-- 1 Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
select `SSN`, `name` from  Scientists.Scientists
where  `name` like '%e%';

-- 2 Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
select `name` from Scientists.Projects
where `code` like 'A%' order by 'name';

-- 3 Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
select `name`, `code`, `hours` from Scientists.Projects
where `code` like '%3%' order by 'name';

-- 4 Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
select `scientist` from Scientists.AssignedTo
where `project` in ('AeH3', 'Ast3', 'Che1');

-- 5 Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
select `name`, `code`, `hours` from Scientists.Projects
where `hours` > 500;

-- 6 Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
select `name`, `code`, `hours` from Scientists.Projects
where `hours` > 250 and `hours`< 800;
-- ou
SELECT * FROM Projects WHERE hours BETWEEN 250 AND 800;

-- 7 Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letre A .
select `name`, `code` from Scientists.Projects
where name not like 'A%';

-- 8 Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
select `name`, `code` from Scientists.Projects
where `code` like '%H%';
