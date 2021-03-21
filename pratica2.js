// Prática 2

let i = false;
let peso;
let altura; 

// pessoa
const nome = prompt('Informe o nome da pessoa:');

i = false;
do {
    peso = prompt('Informe o peso em (Kg e com ponto o valor) de ' + nome + ':');
    peso = parseFloat(peso);
    if (peso) {
        i = true;
    } else {
        console.log('Informe novamente o peso!!');        
    }
} while (i != true);

i = false;
do{ 
    altura = prompt('Informe a altura em (M e com ponto o valor) de ' + nome + ':')
    altura = parseFloat(altura);    
    if (altura) {
        i = true;
    } else {
        console.log('Informe novamente a altura!!');        
    }
}while (i != true);

altura *= altura;
const imc = peso / altura;

if (imc1 < 17) {
    console.log(+nome1+ ' Você está '+ ' é maior que o de '+nome+ ' ('+imc+')');    
} else if (imc == imc1) {
    console.log('O IMC de ' +nome1+ ' ('+imc1+')'+ ' é igual ao o de '+nome+ ' ('+imc+')');    
} else {
    console.log('O IMC de ' +nome+ ' ('+imc+')'+ ' é maior que o de '+nome1+ ' ('+imc1+')');        
}