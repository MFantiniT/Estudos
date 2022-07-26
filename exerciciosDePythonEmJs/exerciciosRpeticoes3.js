//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';

class clienteSeguradora{
    constructor(nome,idade,salario,sexo,estadoCivil){
        this.nome=nome
        this.idade=idade
        this.salario=salario
        this.sexo=sexo
        this.estadoCivil=estadoCivil
    }
}
matheus = new clienteSeguradora('matheus',27,1200,"m","s")

// if(matheus.nome.lenght<3){
//     matheus.nome=
// }

console.log(matheus)