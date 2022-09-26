// Escreva um programa JavaScript para calcular a diferença absoluta entre um número especificado e 19. Retorna o triplo de sua diferença absoluta se o número especificado for maior que 19.

num = 50
diferenca = 19 - num
if (num > 19) {
    diferenca = num - 19
    resultado = diferenca * 3
}

console.log(resultado)