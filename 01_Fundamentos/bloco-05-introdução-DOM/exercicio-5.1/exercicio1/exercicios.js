/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function changText() {
let doc = document.getElementsByTagName('p')[1];
doc.innerText = 'Daqui a dois anos com a ajuda de Deus eu ja serei no minimo Dev Senhor e ja estarei com um inglês no minimo intermediario.';
}
changText();

function  changeSquareToGreen() {
 let color = document.getElementsByClassName('main-content')[0]
 color.style.backgroundColor = 'rgb(76,164,109)';
}
changeSquareToGreen();

function  changeSquareToWhite() {
let color2 = document.getElementsByClassName('center-content')[0]
color2.style.backgroundColor = 'white'
}
changeSquareToWhite()

function correctTitle() {
let title = document.getElementsByClassName('title')[0]
title.innerText = 'Exercício 5.1 - JavaScript'
}
correctTitle()

function paragraphUpperCase() {
    let p = document.getElementsByTagName('p')[1]
    p.innerText = p.innerText.toUpperCase();
}
paragraphUpperCase()

function showParagraphs() {
let paragrafo = document.getElementsByTagName('p')
    for (let index = 0; index < paragrafo.length; index += 1) {
        console.log(paragrafo[index].innerText);
    }
}
showParagraphs()