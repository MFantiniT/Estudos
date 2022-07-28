function contaPassos(x, y, d) {
    x = 5;
    y = 40;
    d = 1;

    for (i = x; i < y; i++) {
        x = x + d
        console.log(x)
    }
    return x
}
passos = contaPassos(5,50,1)