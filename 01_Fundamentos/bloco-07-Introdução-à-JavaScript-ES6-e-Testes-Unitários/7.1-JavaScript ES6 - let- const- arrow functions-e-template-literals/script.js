// function userInfo() {
//   const userEmail = 'arlisson314@gmail.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   console.log(userEmail);
// }
// userInfo();

// const estudante = {
  //   nome: 'arlisson',
  //   idade: 29,
  //   endereco: {
    //     numero: 15,
    //     bairro: 'Vila Maranhão'
    //   }
    // }
    // estudante.nome = "Arlisson"
    // console.table(estudante);
    
    // if (true) {
    //     // inicio do escopo do if
    //     var userAge = '20';
    //     console.log(userAge); // 20
    //     // fim do escopo do if
    //   }

    //   console.log(userAge); // 20

    // var userName = 'Isabella';
    // var userName = 'Lucas';
    // console.log(userName); // Resultado: Lucas

    // const favoriteLanguage = 'Javascript';
    // favoriteLanguage = 'Python';
    // console.log(favoriteLanguage); // Erro
    
    // let favoriteTechnology = 'Machine learning';
    // favoriteTechnology = 'Facial recognition';
    // console.log(favoriteTechnology); // Facial recognition
    
// const movie = ['Mar de fogo', 'Madrugada dos mortos', 'Resureição', 'Paulo apostolo de cristo'];
// movie.push('Dia de treinamento');
// console.log(movie);
    
// movie = ['Mar de fogo', 'Madrugada dos mortos', 'Resureição', 'Paulo apostolo de cristo', ' Dia de treinamento'];
    
// var age;
// age = 20;
// console.log(age);

// const myName = 'Arlissn';

// console.log('Helo ' + myName + ' you are very beautiful');

// console.log(`Helo ${myName} you are very beautiful`);



// Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));


// const multiplication = (x, y) => x * y;
// console.log(multiplication(2, 3));

// A sintaxe básica do operador ternário é muito simples:
// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
// const trueExpression = (1 + 1 === 2) ? `verdade` : `mentira`;
// console.log(trueExpression); // verdade

// const falseExpression = (2 + 2 === 3) ? `verdade` : `mentira`;
// console.log(falseExpression); // mentira


// Situação em que é mais simples usar o operador ternário:
// const checkIfElse = (age) => {
//   if (age >= 18) {
//     return `Você tem idade para dirigir!`;
//   } else {
//     return `Você ainda não tem idade para dirigir...`;
//   }
// };
// let check = checkIfElse(17)
// console.log(check);

// const checkTernary = (age) => (
//   age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
// );
// let check = checkTernary(17);
// console.log(check);
// ------------------------

// // Situação em que usar o operador ternário não faz muito sentido:
// const checkIfElse = (fruit) => {
//   if (fruit === `maçã`) {
//     return `Essa fruta é vermelha`;
//   } else if (fruit === `banana`) {
//     return `Esta fruta é amarela`;
//   } else if (fruit === `laranja`) {
//     return `Essa fruta é laranja`;
//   } else {
//     return `Não sei a cor`;
//   }
// };
// console.log(checkIfElse(`laranja`));

// const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
//   : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!

// function hello() {
//   let s = ["Hello World!", "Olá Mundo!"];
//   console.log(s[0]);
// }

// const soma = (a, b) => a + b;
// let result = soma(9, 2);
// console.log(result);