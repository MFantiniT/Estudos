//Escreva um programa JavaScript para obter a diferença entre um determinado número e 13, se o número for maior que 13 retorne o dobro da diferença absoluta.  

num = 5
numFixo = 13
diferenca = num-numFixo

if(num>numFixo){
    console.log((num-numFixo)*2)
}
else if(num<numFixo){
    console.log(diferenca)
}

//caso seja se a diferença for maior q 13
if(diferenca>numFixo){
    console.log(diferenca*2)
}