/**
 * Membuat Object :
 * 1. Bisa dengan {}
 * 2. Bisa dengan new Object()
 */

// dengan {}
const user1 = {
  name: "Ucup",
  age: 18,
  address: "Depok",
};
// menjalanan objeknya menggunakan looping dan diberi key
for (const key in user1) {
  console.log(user1[key]);
}

/**
 * ======= P
 * ======== e
 * ========= T
 * ========== I 
 * =========== K
 */
// dengan new Object()
const user2 = new Object();
user2.name = "Udin";
user2.age = 17;
user2.adddress = "Bogor";

// panggil key nya lalu propertinya
console.log(user2.name);

