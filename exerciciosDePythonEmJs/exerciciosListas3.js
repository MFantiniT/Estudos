// // Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
// [nota1,nota2,nota3,nota4] = [4, 2, 5, 4]
// console.log( `suas 4 notas são: ${[nota1 ,nota2 ,nota3 ,nota4]} e a sua média é: ${([nota1 +nota2 +nota3 +nota4])/4} `)

const notas = [4, 5, 8, 10]
let mediaC=0
notas.forEach(nota => {
    mediaC += nota/notas.length
    
    
});
console.log(mediaC)