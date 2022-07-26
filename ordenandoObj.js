livros = require('./listaLivros.js')

console.log(livros)

// livros.sort(function (a, b) {
//     return a.titulo < b.titulo ? -1 : a.titulo > b.titulo ? 1 : 0;
// })
// console.log(livros)

livros.sort((a, b) => a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0)

console.log(livros)