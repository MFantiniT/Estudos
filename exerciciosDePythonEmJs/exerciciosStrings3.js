// Nome na vertical. Faça um programa que solicite o nome do usuário e imprima-o na vertical.


nome = "Matheus"
nomeInvertido = []

//imprime nome na vertical
for(i = 0; i<nome.length;i++){
    console.log(nome[i])
}
//nome de trás pra frente 

for(i = nome.length-1; i >= 0;i--) {
    nomeInvertido.push(nome[i])
}
console.log(nomeInvertido)