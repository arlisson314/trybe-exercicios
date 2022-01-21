// const numbers = [32, 15, 3, 2, -5, 56, 10];
// let sumNumbers = 0;
// // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

// for (let index = 0; index < numbers.length; index += 1) {
//     sumNumbers += numbers[index];
// };
// console.log(sumNumbers);

// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
//   console.log(accumulator); // 1 3 6 10
//   return accumulator + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15

// const numbers = [32, 15, 3, 2, -5, 56, 10];
// const getSum = (result, number) => {
//   console.log(result); // 32 47 50 52 47 103
//   return result + number;
// };

// const sumNumbers = numbers.reduce(getSum, 10); //10 42 57 60 62 57 113
// console.log(sumNumbers); // 113
// const numbers3 = [32, 15, 300, 2, -5, 56, 100];
// const numbers2 = [32, 15, 3, 2, -5, 56, 10];
// const numbers = [50, 85, -30, 3, 15];

// const acharMaior = (arr) =>{
// let maior = 0;
//  for (let i = 0; i < arr.length; i += 1) {
//    if (arr[i] > maior) {
//      maior = arr[i];
//    }
//   }
//   console.log(maior);
// };
// acharMaior(numbers3)


  // const numbers = [50, 85, -30, 3, 15];

  // const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

  // const bigger = numbers.reduce(getBigger, 0);
  // console.log(bigger); // 85

//   const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85
