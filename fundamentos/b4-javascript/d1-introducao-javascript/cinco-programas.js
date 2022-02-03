//Exercicios do dia 1 de JS - Bloco 4 - JavaScript Primeiros Passos

//variavel
let a = 4
let b = 5

//adição
console.log (a+b);
//subtração
console.log (a-b);
//multiplicação
console.log (a*b);
//divisão
console.log (a/b);
//modulo
console.log (a%b);

//Programa 1
const num1 = 10
const num2 = 8

if (num1 < num2) {
    console.log(num2 +'  é maior que  '+ num1)

}else {
    console.log(num1 + " é maior que " + num2)
}

//Programa 3
const monitor = 4
const computador = 2
const cadeira = 3

if (monitor > computador && monitor > cadeira) {
    console.log (monitor +' é maior que '+ computador + ' e ' + cadeira);

}else if (computador > monitor && computador > cadeira) {
    console.log (computador +' é maior que ' + monitor + 'e' + cadeira);

}else{ 
    console.log (cadeira + 'é maior que ' + computador + 'e' + monitor);
}

//Programa 4
const valor = 20 

if (valor > 20) {
    console.log (positivo)
}

else if (valor < 20) {
 console.log (negativo)

}else{
    console.log('zero')

}

//Programa 5
let a = 60
let b = 60
let c = 60

let abc = a + b + c ;
let abcTriangle = a > 0 && b > 0 && c > 0;

if(abcTriangle) {
    if (abc === 180) {
        console.log('true')

    }else{
        console.log('false')
};
}else{
    console.log('Erro: ângulo inválido')
}

//Programa 6
const chessPiece = 'rei';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//Programa 7
let notaFinal = 75;

if (notaFinal < 0 || notaFinal > 100) {
    console.log ("Nota informada incorretamente");
    }else if (notaFinal >= 90) {
        console.log('A');
    }else if (notaFinal >= 80) {
        console.log('B');
    }else if (notaFinal >= 70) {
        console.log('C');
    }else if (notaFinal >= 60) {
        console.log('D');
    }else if (notaFinal >= 50) {
        console.log('E');
    }else{
        console.log('F');
    } 

//Programa 8 
const numero1 = 25;
const numero2 = 30;
const numero3 = 35;

let par = false

if (numero1 %2 === 0 || numero2 %2 === 0 || numero3 %2 ===0) {
    par = true
};
console.log(resultado)

//Programa 9
const n1 = 58;
const n2 = 36;
const n3 = 92;

let impar = false

if (n1 %2 !== 0 || n2 %2 !== 0 || n3 %2 !==0) {
    impar = true
};
console.log(impar)

//Programa 10
const valorCusto = (300+(300/100*20)) //custo + 20%imposto
const valorVenda = 500 //Valor total de venda
let totalVendido = 1000 //Unidades vendidas

if (valorCusto < 1 || valorVenda < 1) {
    console.log('Erro')
}else{
    console.log ((valorVenda - valorCusto) * totalVendido)
}

//Programa 11 // Não fiz, apenas li
let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));