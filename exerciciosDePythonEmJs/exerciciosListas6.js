//Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.
let idade = [25 , 30, 22, 44, 35]
let altura = ["1.80" , 1.75, 1.65, 1.92, "1.60"]
let idadeLenght = idade.length-1
let alturaLenght = altura.length-1
for([i]=[idadeLenght]; i>-1; i--){
    console.log(idade[i],altura[i])
}

// listaIdade = []
// listaAltura = []

// idade.forEach(idades => {
//     listaIdade.unshift(idades)    
// });

// altura.forEach(alturas => {
//     listaAltura.unshift(alturas)    
// });

// console.log(listaIdade, listaAltura)