// Prática 3

const login = prompt('Login:');
const senha = prompt('Senha:');;

if (login == 'aluno' && senha == '123' || login == 'professor' && senha == '456') {
    alert('Login realizado com sucesso');
} else {
    alert('[Erro]: Falha ao logar!');
}