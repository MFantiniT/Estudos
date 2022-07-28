let num = 11
for (i = 1; i <= num; i++)
    lista = []
let divisor = 0

function primos(num){
    for (i = 1; i <= num; i++) {
        //console.log(num % i)
        if (num % i == 0) {
            divisor += 1
        }
    }
    primo = (divisor == 2 ? console.log(`o numero ${num} é primo.`) : console.log(`o número ${num} não é primo`))
    return primo
}

primos(5)


