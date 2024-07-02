// HTML Elements
// 1. Looping Array of Object dan di masukan kedalam HTML
// --------------------------------------------
// const Karyawan = [
//   {
//     nama: "Randi Himawan",
//     email: "randi.mybook@gmail.com",
//   },
//   {
//     nama: "Putri Swandayani",
//     email: "putri.mybook@gmail.com",
//   },
//   {
//     nama: "Muhammad Ilyas",
//     email: "ilyas.mybook@gmail.com",
//   },
// ];

// Looping array dari karyawan
// --------------------------------------------
// const el = `<div class="karyawan">
//   ${Karyawan.map((k) => {
//     return `<ul>
//       <li>${k.nama}</li>
//       <li>${k.email}</li>
//     </ul>`;
//   }).join("")}
// </div>`;

// 3.Conditional
// --------------------------------------------
// const player = [
//   {
//     position: "Defender",
//     nama: "Sergio Ramos",
//     patner: "Pepe",
//   },
//   {
//     position: "Striker",
//     nama: "Benzema",
//   },
// ];

// const el = `<div class="player">
//   ${player
//     .map((pos) => {
//       return `<ul>
//       <li> Nama Pemain :${pos.nama}</li>
//       <li>Posisi sebagai : ${pos.position} ${
//         pos.patner ? `dan patnernya ${pos.patner}` : ``
//       }</li>
//     </ul>`;
//     })
//     .join("")}
// </div>`;

// 4.Membuat Function Sendiri
// --------------------------------------------
const dataPerusahaan = {
  namaPerusahaan: "PT.Usaha Bersama",
  tahun: 2020,
  dataKaryawan: [
    {
      nama: "Randi Himawan",
      id: 127000111,
      posisi: "3D Artist",
    },
    {
      nama: "Putri Swandayani",
      id: 227000222,
      posisi: "Dokter Umum",
    },
    {
      nama: "Muhammad Ilyas",
      id: 327000333,
      posisi: "Pilot",
    },
  ],
};

function callofDataKarywan() {
  return `<ol>${dataPerusahaan.dataKaryawan
    .map((k) => {
      return `<li>${k.nama} - ${k.id} - ${k.posisi}</br></li>`;
    })
    .join("")}</ol>`;
}

const el = `<div class="player">
<h2>Perusahaan : ${dataPerusahaan.namaPerusahaan}</h2>
<h3><i>Berdiri dari Tahun : ${dataPerusahaan.tahun}</i></h3>
<span>Data Karyawan :</span>
<span>${callofDataKarywan()}</span>
</div>`;

document.body.innerHTML = el;
