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
let resultado = `${nome}! você está`;
let dica;

if (imc < 17) {
    resultado = `${resultado} muito abaixo do peso.`;
    dica = 'Precisa se alimentar mais!!';
} else if (imc >= 17 && imc < 18.5) {
    resultado = `${resultado} abaixo do peso.`;        
    dica = 'Precisa engoradar um pouquinho só!';
} else if (imc >= 18.5 && imc < 25) {
    resultado = `${resultado} com seu peso normal.`;
    dica = 'Parabéns!! continue com os bons hábitos!';
} else if (imc >= 25 && imc < 30) {
    resultado = `${resultado} acima do peso`;
    dica = 'Cuidado!! Regule sua dieta e começe a fazer exercícios!';
} else if (imc >= 30 && imc < 35) {
    resultado = `${resultado} com Obesidade 1`;
    dica = 'Perigo!! Precisa urgentemente regular seus hábitos!';
} else if (imc >= 35 && imc < 40) {
    resultado = `${resultado} com Obesidade 2`;
    dica = 'Perigo!!, é melhor procurar um médico!';
} else {
    resultado = `${resultado} com Obesidade 3`;
    dica = 'Perigo!! Precisa urgentemente regular seus hábitos, é melhor procurar um médico!';
}

console.log(`${resultado} DICA:[${dica}]`)