//1) O fatorial é a multiplicação de um número natural pelos seus antecessores, 
//   exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);




//2)Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
//Por exemplo, a palavra "banana" seria invertida para "ananab". 
//Utilize a string abaixo como exemplo, depois troque por outras para verificar
// se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}
console.log(reverseWord);

3//Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

//Escreva dois algoritmos: um que retorne a maior palavra deste array 
//e outro que retorne a menor. 
//Considere o número de caracteres de cada palavra.

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
    }
}
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length < menorPalavra.length) {
            menorPalavra = array[i];
        }
    }
    console.log(maiorPalavra)
    console.log(menorPalavra)



//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, 
//   escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorNumeroPrimo = 0

for (let numeroAtual=0; numeroAtual <= 50; numeroAtual += 1) {
    let primo= true;
    for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
        if (numeroAtual % divisorAtual === 0) {
            primo = false;
        }
    } 
    if (primo) {
        maiorNumeroPrimo = numeroAtual; 
    }
}

console.log(maiorNumeroPrimo)
