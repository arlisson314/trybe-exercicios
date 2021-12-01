// 1: Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for ( let i = 0; i < numbers.length; i += 1) {
//     console.log( numbers[i]);
// }


// 2: Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for ( let cont = 0; cont < numbers.length; cont += 1) {
//     soma += numbers[cont];
// }
// console.log(soma);


// 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for ( let cont = 0; cont < numbers.length; cont += 1) {
//     soma += numbers[cont]; 
// }
// console.log(soma / numbers.length);

// 4: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for ( let cont = 0; cont < numbers.length; cont += 1) {
//     soma += numbers[cont] 
// }
// let mediaArit = soma / numbers.length;
// if ( mediaArit > 20) {
//     console.log("valor maior que 20");
// }
// else{
//     console.log("valor menor ou igual a 20");
// }

// 5:Utilizando for , descubra qual o maior valor contido no array e imprima-o;


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let max = "0";

// for ( let cont = 0; cont < numbers.length; cont += 1) {
    // if (numbers[cont] > max) {
//         max = numbers[cont];
//     }
// }
// console.log(max); 

// 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = null;

// for ( let cont = 0; cont < numbers.length; cont += 1) {
    
//     if ( numbers[cont] % 2 !== 0) {
//         impar += 1; 
//     }
// }

// if ( impar > 0 ) {
//     console.log(impar);
// }
// else {
//     console.log("nenhum valor ímpar encontrado");
// }


// 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for ( let i = 0; i < numbers.length; i +=1 ) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log(menor);
// o valor da variável number poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com i = 1