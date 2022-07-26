
gabarito = [["A", "B", "D", "E", "E", "A", "E", "C", "B", "A"], ["A", "D", "B", "E", "E", "A", "E", "C", "B", "A"], ["A", "B", "C", "E", "A", "A", "E", "C", "B", "A"], ["A", "B", "D", "E", "E", "A", "E", "C", "B", "A"], ["A", "B", "D", "E", "E", "A", "E", "C", "B", "A"]]
pontos = 0
notas = []
console.log(gabarito[0][1])

for (d = 0; d < gabarito.length; i++){
    for (let i = 0; i < gabarito[d][0].length; i++) {
        if (i == 1 && gabarito[0] == "A")
            pontos += 1

        if (i == 2 && gabarito[1] == "B")
            pontos += 1

        if (i == 3 && gabarito[2] == "C")
            pontos += 1

        if (i == 4 && gabarito[3] == "D")
            pontos += 1

        if (i == 5 && gabarito[4] == "E")
            pontos += 1

        if (i == 6 && gabarito[5] == "E")
            pontos += 1

        if (i == 7 && gabarito[6] == "D")
            pontos += 1

        if (i == 8 && gabarito[7] == "C")
            pontos += 1

        if (i == 9 && gabarito[8] == "B")
            pontos += 1

        if (i == 10 && gabarito[9] == "A")
            pontos += 1

    }}
notas.push(pontos)
console.log(notas)