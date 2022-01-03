// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai .
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentElement.style.color = 'red';

let primeiroFilho = document.getElementById('primeiroFilho');
    primeiroFilho.innerText = 'Oi Arlisson você vai conseguir Deus é contigo e com sua familia tenha um pouco de paciência'

let firstChild = document.getElementById('pai').firstElementChild;

let previousElementSibling = elementoOndeVoceEsta.previousElementSibling

let atencao = elementoOndeVoceEsta.nextSibling;
console.log(atencao);

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

let penultimoFilho = document.getElementById ('pai').lastElementChild.previousElementSibling




// E a prática? Aqui!
// Crie um irmão para elementoOndeVoceEsta .
// Crie um filho para elementoOndeVoceEsta .
// Crie um filho para primeiroFilhoDoFilho .
// A partir desse filho criado, acesse terceiroFilho .

let father = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
    father.appendChild(irmaoElementoOndeVoceEsta);
console.log(father);

let father2 = document.getElementById('elementoOndeVoceEsta');
console.log(father2);
let terceiroFilhoDoFilho = document.createElement('section');
    terceiroFilhoDoFilho.id = 'terceiroFilhoDoFilho';
    father2.appendChild(terceiroFilhoDoFilho);

let father3 = document.getElementById('primeiroFilhoDoFilho')
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
    filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
    father3.appendChild(filhoPrimeiroFilhoDoFilho);



let acess = document.getElementById('filhoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(acess);

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho


console.log(acess); 



















// let listaMercado = [
//     'arroz',
//     'feijão',
//     'farinha',
//     'carne',
//     'frango',
// ];


// let lista = document.querySelector('.lista')

// for (let index = 0; index < listaMercado.length; index += 1){
//     let intens = listaMercado[index];

//     let listaMercadoItens = document.createElement('li');
//     listaMercadoItens.innerText = intens;

//     lista.appendChild(listaMercadoItens);
// }

