// // let nome = "matheus Fantini"
// // console.log(nome.length)

// Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.

function numReverse(num, numReves) {
    for (i = num.length - 1; i >= 0; i--) {
        numReves += num[i]
    }
    return console.log(numReves)
}
let num = "9876543210"
let numReves = ""

numReverse(num, numReves)