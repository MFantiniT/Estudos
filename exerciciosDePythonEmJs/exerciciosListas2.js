//Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

let lista = [2,5,4,6,7,4,3,2,1,10]
let listaInvertida = []
let tamanhoDaLista = lista.length-1

for(i = tamanhoDaLista; i>=0; i--){

    listaInvertida.push(lista[i])
    
}
console.log(listaInvertida)
