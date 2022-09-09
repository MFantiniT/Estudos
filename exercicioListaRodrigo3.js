let data = new Date();
ano = data.getFullYear() + "";
mes = (data.getMonth() + 1) + "";
dia = (data.getDate()) + "";
dataHoje = 0

if (mes.length === 1) {

    if (dia.length === 1) {
        dataHoje = `Data: 0${dia}/ 0${mes}/ ${ano.substring(2)}`
    }
    else {
        dataHoje = `Data: ${dia}/ 0${mes}/ ${ano}`
    }
}
else {
    console.log(`Data: ${dia}/ ${mes}/ ${ano}`)
}
console.log(dataHoje)




