//Escreva um programa JavaScript para criar uma nova string adicionando "Py" na frente de uma determinada string. Se a string especificada começar com "Py", retorne a string original.

string = "pyyyrado"
py = 'Py'
if (string.substring(0, 2) == 'Py' || string.substring(0, 2) == 'py') {
    console.log(string)
}

else {
    console.log(py + string)
}
