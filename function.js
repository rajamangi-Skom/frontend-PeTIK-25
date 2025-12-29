/**
 * Function adalah blok kode yang dapat digunakan kembali
 * untuk melakukan tugas tertentu
 * Macam - Macam Function :
 * 1. function declaration
 * 2. function expression
 * 3. arrow function
 */

// 1. function declaration
function sapa(nama) {
  console.log(`Halo ${nama}`);
}

sapa("Ucup");

//  2. function expression
const salam = function (nama) {
  console.log(`Asalamualaikum ${nama}`);
};
salam("Heru");

// 3. arrow function
const hitungJumlah = (a, b) => {
  return a / b;
};
console.log(hitungJumlah(4, 2));

const ucap = (nama) => {
  console.log(`Selamat Datang ${nama}`);
};
ucap("Ntuy")
