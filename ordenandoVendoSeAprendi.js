let livroValor = [12, 2, 4, 5, 6, 1]
let livroMenorValor = 0

for (let atual = 0; atual < livroValor.length; atual++) {
    if (livroValor[livroMenorValor] > livroValor[atual]) {
        livroMenorValor = livroValor[atual]
    }
    console.log(atual)
}
console.log(`O livro de menor valor é o que custa: ${livroMenorValor}`)




