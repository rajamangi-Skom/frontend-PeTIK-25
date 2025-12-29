/**
 * Promise terdpat 3 status ;
 * 1. Pending (Tertunda)
 * 2. Fulfilled/Resolve (Terpenuhi)
 * 3. Reject (Tertolak)
 */

function rebusAir() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rebus Air");
    }, 3000);
  });
}

function masakMie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Masak Mie");
    }, 2000);
  });
}

function makanMie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rebit Makan Mie");
    }, 4000);
  });
}

// rebusAir(() => {
//   masakMie(() => {
//     makanMie(() => {
//       //   console.log("Selesai");
//     });
//   });
// });

// rebusAir()
//   .then((outRebus) => {
//     console.log(outRebus);
//     return masakMie();
//   })
//   .then((outMasak) => {
//     console.log(outMasak);
//     return makanMie();
//   })
//   .then((outMakan) => {
//     console.log(outMakan);
//   })
//   .catch((error) => {
//     console.error(`Gagal ${error}`);
//   });

async function buatMie() {
  try {
    const outRebus = await rebusAir();
    console.log(outRebus);

    const outMasak = await masakMie();
    console.log(outMasak);

    const outMakan = await makanMie();
    console.log(outMakan);
  } catch (error) {
    console.error(`Gagal ${error}`);
  }
}
buatMie()