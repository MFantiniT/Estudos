//Escreva um programa JavaScript para calcular os dias que faltam até o próximo Natal
data = new Date;
dia = data.getDate();
mes = data.getMonth() + 1;
mesesFaltantes = (12 - mes)
diasFaltantes = 25 - dia
console.log(`Faltam ${mesesFaltantes} meses e ${diasFaltantes} dias`)

diasF = 0
// for (let i = mes; i < 12; i++) {
//     if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9 || i === 11)
//         diasF += 31
//     else {
//         diasF += 30
//     }
//     // console.log(diasF)
// }
for (let i = mes; i < 12; i++) {
    if (i % 2 != 0)
        diasF += 31
    else {
        diasF += 30
    }
}
// console.log(diasF)
diasProNatal = diasF + diasFaltantes
console.log("faltam ", diasProNatal, " dias pro natal")