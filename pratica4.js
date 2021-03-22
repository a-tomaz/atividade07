// Prática 4

let flag = false;
let tamanho;

// pegando o valor do array
do {
    const n = prompt('Informe um número:');
    tamanho = parseInt(n);
    if (tamanho || tamanho === 0) {
        flag = true;
    } else {
        console.log('Informe novamente um número!!');        
    }
} while (flag != true);
flag = false;

// criando array
let palavras = new Array();
let i = 0;
let cont = tamanho;

// preenchendo array
while (i < tamanho) {
    palavras[i] = prompt(`Número de palavras para informar [${cont}], por favor informe uma por vez:`);
    i++;
    cont--;
}

// imprimindo array pelo final
for (i = tamanho; i > 0; i--) {
    const palavra = palavras[i-1];
    console.log(`Palavra ${i}: ${palavra}`);
}