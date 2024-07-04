// function myFunc(...Arguments) {
//   console.log(Arguments);
// }
// myFunc(1, 2, 3, 4);

// function penjumlahan(...Arguments) {
//   return Arguments.reduce((a, b) => a + b);
// }
// console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7, 8, 9)); //print : 45

// array Destructuring
const kelompok1 = ["Randi", "Putri", "Ilyas", "Ara"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(
  `Ketua ialah ${ketua}, Wakil ialah ${wakil} & Anggotanya ialah ${anggota}`
); //print : Ketua ialah Randi, Wakil ialah Putri & Anggotanya ialah Ilyas,Ara
