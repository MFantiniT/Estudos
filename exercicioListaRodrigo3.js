let data = new Date();
ano = data.getFullYear();
console.log(ano);
mes = (data.getMonth() + 1)+"";
console.log(mes);
dia = data.getDate();

console.log(dia)
if (mes.length === 1) {
    console.log(`Data: ${dia}/ 0${mes}/ ${ano}`);
}
else {
    console.log(`Data: ${dia}/ ${mes}/ ${ano}`)
}

// console.log(mes.length)

