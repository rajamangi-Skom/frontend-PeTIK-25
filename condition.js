/**
 * jika nilai > 90 = A
 * jika nilai > 70 = B
 * jika nilai > 60 = C
 * jika nilai < 60 = D
 *
 */
let nama = "Rebit🐰";
const nilai = 0;
if (nilai > 90 && nilai <= 100) {
  grade = "A";
  console.log(`${nama} nilai nya = A`);
} else if (nilai > 70 && nilai <= 90) {
  grade = "B";
  console.log(`${nama}  nilai nya = B`);
} else if (nilai >= 60 && nilai <= 70) {
  grade = "C";
  console.log(`${nama}  nilai nya = C`);
} else if (nilai < 60 && nilai >= 0) {
  grade = "D";
  console.log(`${nama}  nilai nya = D`);
} else {
  console.log(`${nama} Nilai Tidak valid`);
}

// Bisa memberikan keterangan lebih terhadap proses if else
switch (grade) {
  case "A":
    console.log(`${nama} Sangat Baik`);
    break;
  case "B":
    console.log(`${nama} Baik`);
    break;
  case "C":
    console.log(`${nama} Cukup`);
    break;
  case "D":
    console.log(`${nama} Kurang Baik`);
    break;
  default:
    "Grade Tidak Valid";
    break;
}

/**
 * Operator ternery
 */

const age = 19;
const status = age > 21 ? "Dewasa" : "Belum Dewasa";
console.log(status);

