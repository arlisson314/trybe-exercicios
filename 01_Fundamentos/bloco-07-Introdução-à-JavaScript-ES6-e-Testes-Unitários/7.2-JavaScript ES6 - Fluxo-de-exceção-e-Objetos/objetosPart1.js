// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

// customer.lastName = 'Faria'
// console.log(Object.keys(customer));

const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
//   console.log(customer1);
  
//   customer1.lastName = 'Faria';
//   customer1['job'] = 'engineer'
//   console.log(customer1);
  
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

// const newFunction = () => {
//     object = {
//         name: 'Arlisson'
//     }
//     return object;
// }
// console.log(newFunction());


// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
// };
// console.log(Object.keys(coolestTvShow));

// const arrayKeys = [];
// for (const key in coolestTvShow) {
//     arrayKeys.push(key)
// }
// console.log(arrayKeys)


// const arr = ['a', 'b', 'c'];
// // console.log(Object.keys(arr));
// console.log(Object.getOwnPropertyNames(arr));

// newArr = [];
// for (let i in arr) {
//  newArr.push(i);
// }
// console.log(newArr);



// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const exibir = (student) => {
    const arrayExibir = Object.keys(student);
    for ( let i = 0; i < arrayExibir.length; i += 1) {
        console.log(`Abilidade: ${arrayExibir[i]};  Nivel de abilidade: ${student[arrayExibir[i]]};`);
    }
}
console.log(`Estudante 1`);
exibir(student1);

console.log(`Estudant 2`);
exibir(student2);

