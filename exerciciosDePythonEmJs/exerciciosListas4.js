//Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

let listaDeCaracteres = ["a","c","b","d","a","c","a","w","r","h","j"]
let listaVogais=[]
let listaConsoantes=[]
let vogais = 0
let consoantes = 0

listaDeCaracteres.forEach(caracter => {
    if(caracter =="a" || caracter =="e" || caracter =="i" || caracter =="o" || caracter =="u"){
        vogais+=1
        listaVogais.push(caracter)
    } 
    else{
        consoantes+=1
        listaConsoantes.push(caracter)
    }
    
});

console.log(`foram identificados ${vogais} vogais e ${consoantes} consoantes
as vogais encontradas foram => ${listaVogais}
e as consoantes foram => ${listaConsoantes} `)
