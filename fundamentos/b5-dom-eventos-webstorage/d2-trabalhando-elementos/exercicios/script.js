// Capítulo 1

// 1. Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM`
// como filho da tag `body`;
let title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(title);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main)

// 3. Adicione a tag section com a classe center-content 
// como filho da tag main criada no passo 2;
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// 4. Adicione a tag p como filho do section criado 
// no passo 3 e coloque algum texto;
let p = document.createElement ('p');
p.innerHTML = 'Algum texto para a seção';
section.appendChild(p);

// 5. Adicione a tag `section` com a classe `left-content` 
// como filho da tag `main` criada no passo 2;

let sectionLeft = document.createElement ('section');
sectionLeft.className = 'left-content'
main.appendChild(sectionLeft)

// 6. Adicione a tag section com a classe right-content 
// como filho da tag main criada no passo 2;
let sectionRight = document.createElement ('section')
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// 7. Adicione uma imagem com src configurado para o valor 
// https://picsum.photos/200 e classe small-image .
// Esse elemento deve ser filho do section criado no passo 5;
let image = document.createElement ('img')
image.src = 'https://picsum.photos/200'
image.className = 'small-image'
sectionLeft.appendChild(image);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, 
// ou seja, um , dois , três , ... como valores da lista. 
// Essa lista deve ser filha do section criado no passo 6;
let uList = document.createElement ('ul')
sectionRight.appendChild(uList)
let arrayN = ['um','dois','tres','quatro','cinco','seis',
'sete','oito','nove','dez']
for (let i in arrayN) {
    let list = document.createElement('li');
    list.innerHTML = arrayN[i];
    uList.appendChild(list);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let i = 0; i <3; i += 1) {
    let hTrio = document.createElement ('h3');
    hTrio.className = 'description';
    hTrio.innerHTML = 'Title Trio';
    main.appendChild(hTrio);
}



// Capítulo 2

// 1.Adicione a classe title na tag h1 criada;
title.className = 'title';

 // 2.Adicione a classe description nas 3 tags h3 criadas;
 // ** Adicionado DENTRO do LOOP no Item 9 do Capitulo 1 ** \\

// 3. Remova a section criado no passo 5 
// (aquele que possui a classe left-content ). Utilize a função .removeChild();
let sectionLeftRemove = document.getElementById('left-content')
//como o 'sectionLeft' esta aberto, pode ser usado somente: 
main.removeChild(sectionLeft);

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content). 
// Dica: para centralizar, basta configurar o margin-right: auto da section ;
let sectionRightCenter = document.getElementsByClassName('right-content')
//como o 'sectionRight' esta aberto, pode ser usado somente: 
sectionRight.style.marginRight ='auto';

// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 
// (aquela que possui a classe center-content ) para a cor verde;
let sectionBG = document.getElementsByClassName ('center-content')
//como o 'section' esta aberto, pode ser usado somente: 
section.parentNode.style.background = 'green';

// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
uList.lastChild.remove();
uList.lastChild.remove();