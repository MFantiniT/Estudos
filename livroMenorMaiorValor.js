const livros = require('./listaLivros');
let valor = 0
quero = "Maior Valor"
queroEncontra = quero.toLowerCase()
if (queroEncontra == "menor valor") {
    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco < livros[valor].preco) {
            valor = atual
        }
    }
    console.log(livros[valor])
}

if (queroEncontra == "maior valor") {
    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco > livros[valor].preco) {
            valor = atual
        }
    }
    console.log(livros[valor])

}


