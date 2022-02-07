//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , 
// ou false , se não for.

function palindromeVerify(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    }else{
        return false
    }
}
console.log (palindromeVerify('arara'))
console.log (palindromeVerify('desenvolvimento'))

//2 - Crie uma função que receba um array de inteiros e retorne 
// o índice do maior valor.


function maiorValor(number) {
    let nMaior = 0
    for (let i in number) {
    if (number[nMaior] < number[i]) {
        nMaior = i;
    }
}
return nMaior
}
