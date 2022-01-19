// function sum (number1, number2) {
//     return number1 + number2;
//   }
  
//   const sumVariable = sum;
  
//   console.log(sum);
  //  [Function: sum]


//   const sum = (number1, number2) => {
//     return number1 + number2;
//   };

//   const result = sum(1, 2);
//   console.log(result);

// // Passar funções como argumento para outras funções:
// const sayHello = () => {
//     return ('hello trybers');
//   }
  
//   const printGreeting = (callback) => {
//       console.log(callback());
//   }

//   printGreeting(sayHello);
  
// // Retornar uma função de outra função:
//   const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }
  
//   const initialSum = sumFixAmount(15)
//   console.log(initialSum(5));


// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);


// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(4, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   });


// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(4, isEven); // Testa quais números serão pares;
// repeat(4, isOdd); // Testa quais números serão ímpares;
