/**
 * Array
 * Membuat Array bisa dengan :
 * 1. []
 * 2. Array()
 */

// menggunakan kuurung siku []
const fruits = ["Apel", "Anggur", "Jeruk"];
// console.log(fruits);
// fruits.push("Mangga"); // push menambahkan dari belakang
// fruits.shift(); // shift menghapus dari depan dan bisa juga langsung menambahkan nilai baru
// fruits.forEach((fruit) => console.log(fruit));

const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsUpper);

const longNameFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longNameFruits);

/**
 *=================================================================
 */
// menggunakan Array()
const animals = Array("Kucing", "Sapi", "Ayam");
// console.log(animals);
// animals.unshift("Kelinci"); // unshift nambah dari depan
// animals.pop(); // pop menghapus dari belakang
// animals.forEach((animal) => console.log(animal));

const animalLower = animals.map((animal) => animal.toLowerCase());
console.log(animalLower);

const longNameAnimals = animals.filter((animal) => animal.length === 4);
console.log(longNameAnimals);

/**
 * Spread
 * digunakan untuk menggabungkan 2 / lebih array
 * find digunakan untuk mencari satu kondisi tertentu
 */

const combine = [...fruits, ...animals];
const foundItems = combine.find(
  (item) => item.toLowerCase() == "apel".toLowerCase()
);
console.log(foundItems);

/**
 * Includes
 * digunakan untuk mencari dan mengeluarkan nilai boolean
 */
console.log(combine.includes("Ayam"));
