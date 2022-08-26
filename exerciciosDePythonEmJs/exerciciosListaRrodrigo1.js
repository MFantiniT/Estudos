let data = new Date();
console.log(data);
let dia = data.getDay();
console.log(dia);
let listaDias = ["Segunda", "Terça", "Quarta", "Quinta ", "Sexta", "Sábado", "Domingo"];
console.log("Ho.je é : " + listaDias[dia] + ".");
let horas = data.getHours();
console.log(horas);
let minutos = data.getMinutes();
let segundos = data.getSeconds();
// let diaNoite = (horas >= 12) ? " pm " : " am ";
// horas = (horas >= 12) ? horas - 12 : horas;
// if (horas === 0 && diaNoite === ' PM ') {
//     if (minutos === 0 && segundos === 0) {
//         horas = 12;
//         diaNoite = ' Meio dia';
//     }
//     else {
//         horas = 12;
//         diaNoite = ' PM';
//     }
// }
// if (horas === 0 && diaNoite === ' AM ') {
//     if (minutos === 0 && segundos === 0) {
//         horas = 12;
//         diaNoite = ' Meia noite';
//     }
//     else {
//         horas = 12;
//         diaNoite = ' AM';
//     }
// }
// console.log("horas : " + horas + diaNoite + " : " + minutos + " : " + segundos);
console.log("horas : " + horas + "H : " + minutos + "M : " + segundos + "S");
console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());