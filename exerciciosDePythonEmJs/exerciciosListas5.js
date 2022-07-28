//Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

let numeros = [10,25,32,55,8,9,54,90,54,23,345,7,9,20,87,6,5,,56,87,899,8,7,52]
let par = []
let impar = []


numeros.forEach(n => {
    if(n % 2 == 0){
        par.push(n)
    }
    else{
        //impar.includes(n);
        impar.push(n)
    }
    
});

console.log(`numeros impares => ${impar}
numeros pares => ${par}`)