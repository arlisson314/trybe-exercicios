-- Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.
select `name`as nome_das_pecas from PecasFornecedores.Pecas
where `name` like "GR%";

-- Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
select `code`,`peca`, `fornecedor`, `preco` from PecasFornecedores.Fornecimentos
where `code` = 2 order by `fornecedor`;

-- Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
select `peca`, `fornecedor`, `preco` from PecasFornecedores.Fornecimentos
where `fornecedor` like "%n%";

-- Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
select `code`, `name` from PecasFornecedores.Fornecedores
where `name` like "%ltda" order by `name` desc;

-- Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
select count(*) from PecasFornecedores.Fornecedores
where `name` like '%F%';

-- Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
select `code`,`peca`, `fornecedor`, `preco` from PecasFornecedores.Fornecimentos
where `preco`  between 15 and 40;

-- Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
select count(*) from PecasFornecedores.Vendas
where date(order_date) between '2018-04-15' and '2019-07-30';