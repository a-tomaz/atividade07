// Prática 1

let i = false;
let peso;
let altura; 

// pessoa 1
const nome1 = prompt('Informe o nome da primeira pessoa:');

do {
    peso = prompt('Informe o peso em (Kg e com ponto o valor) de ' + nome1 + ':');
    peso = parseFloat(peso);
    if (peso) {
        i = true;
    } else {
        console.log('Informe novamente o peso!!');        
    }
} while (i != true);

i = false;
do{ 
    altura = prompt('Informe a altura em (M e com ponto o valor) de ' + nome1 + ':')
    altura = parseFloat(altura);    
    if (altura) {
        i = true;
    } else {
        console.log('Informe novamente a altura!!');        
    }
}while (i != true);

altura *= altura;
const imc1 = peso / altura;

// pessoa 2
const nome2 = prompt('Informe o nome da segunda pessoa:');

i = false;
do {
    peso = prompt('Informe o peso em (Kg e com ponto o valor) de ' + nome2 + ':');
    peso = parseFloat(peso);
    if (peso) {
        i = true;
    } else {
        console.log('Informe novamente o peso!!');        
    }
} while (i != true);

i = false;
do{ 
    altura = prompt('Informe a altura em (M e com ponto o valor) de ' + nome2 + ':')
    altura = parseFloat(altura);    
    if (altura) {
        i = true;
    } else {
        console.log('Informe novamente a altura!!');        
    }
}while (i != true);

altura *= altura;
const imc2 = peso / altura;

if (imc1 > imc2) {
    console.log('O IMC de ' +nome1+ ' ('+imc1+')'+ ' é maior que o de '+nome2+ ' ('+imc2+')');    
} else if (imc2 == imc1) {
    console.log('O IMC de ' +nome1+ ' ('+imc1+')'+ ' é igual ao o de '+nome2+ ' ('+imc2+')');    
} else {
    console.log('O IMC de ' +nome2+ ' ('+imc2+')'+ ' é maior que o de '+nome1+ ' ('+imc1+')');        
}