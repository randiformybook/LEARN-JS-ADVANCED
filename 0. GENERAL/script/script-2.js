// Destructuring 6.2

// Destructuring Assignment
function caculation(a, b) {
  return {
    sum: a + b,
    sub: a - b,
    mul: a * b,
    div: a / b,
  };
}

const { sum, sub, mul, div } = caculation(2, 3);
console.log(sum, sub, mul, div); // print : 5 -1 6 0.6666666666666666
console.log(sub); //print : -1
console.log(mul); //print : 6

// Destructuring Arguments
const karyawan1 = {
  nama: "Randi Himawan",
  umur: 35,
  pekerjaan: "Programmer",
  skill: {
    bahasa: "Javascript",
    framework: "React",
    editing: "Photoshop",
    modelling: "3Ds Max",
  },
};

function cetakKaryawan({
  nama,
  umur,
  pekerjaan,
  skill: { bahasa, framework, editing, modelling },
}) {
  return `Hai nama saya adalah ${nama}, umur saya ${umur} tahun. Sekarang saya berkerja di salahsatu Perusahaan sebagai ${pekerjaan}. Saya memiliki kemampuan seperi, 
  programming language : ${bahasa}
  framework : ${framework}
  editing : ${editing}
  modelling : ${modelling}`;
}

console.log(cetakKaryawan(karyawan1));
// print : Hai nama saya adalah Randi Himawan, umur saya 35 tahun. Sekarang saya berkerja di salahsatu Perusahaan sebagai Programmer. Saya memiliki kemampuan seperi,
// programming language : Javascript
// framework : React
// editing : Photoshop
// modelling : 3Ds Max
