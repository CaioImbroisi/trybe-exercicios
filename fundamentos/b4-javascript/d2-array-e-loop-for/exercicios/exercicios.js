//1) Nesse primeiro exercício, percorra o array imprimindo todos os valores 
//   nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

//2) Para o segundo exercício, some todos os valores contidos 
//   no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let i = 0; i < numbers.length; i += 1 ) {
    resultado += numbers[i];
}
console.log(resultado);

//3) Para o terceiro exercício, calcule e imprima a média aritmética 
//   dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let i = 0; i < numbers.length; i += 1 ) {
    resultado += numbers[i];
    
}
media = resultado / numbers.length;
console.log(media);

//4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, 
//imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let i = 0; i < numbers.length; i += 1 ) {
    resultado += numbers[i];
    
}
media = resultado / numbers.length;
if (media > 20) {
    console.log('valor maior que 20')
}else{
    console.log('valor menor que 20')
}

console.log(media);

//5) Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let i = 0; i < numbers.length; i += 1 ) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
}
    console.log(maiorNumero);

//6) Descubra quantos valores ímpares existem no array e imprima o resultado.
//   Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0
for (let i = 0; i < numbers.length; i += 1 ) {
    if (numbers[i] %2 !==0) {
    impar += 1;
    }
}
if (impar ===0) {
    console.log ('nenhum valor impar encontrado')
}else{
    console.log(impar)
}

//7) Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 100;
for (let i = 0; i < numbers.length; i += 1 ) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i];
    }
}
    console.log(menorNumero);

//8) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];
for (let i = 1; i <=25; i += 1 ) {
    numbers.push(i);
}
console.log(numbers)

//9) Utilizando o array criado no exercício anterior imprima o 
// resultado da divisão de cada um dos elementos por 2.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1 ) {
    divisao = numbers[i] / 2;
    console.log(divisao);
    }

