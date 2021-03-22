// Prática 5

function calcularIdade(idade){
    if (idade >= 65) {
        return `Você já está aposentado.`;
    } else {
        return `Você ainda não se aposentou.`;
    }
}

let flag = false;
let parametroIdade;

const nome = prompt('Informe o nome da pessoa:');

do {
    const idade = prompt('Informe a idade:');
    parametroIdade = parseInt(idade);
    if (parametroIdade || parametroIdade === 0) {
        flag = true;
    } else {
        console.log('Informe novamente a idade!!');        
    }
} while (flag != true);
flag = false;

console.log(`${nome}, ${calcularIdade(parametroIdade)}`);