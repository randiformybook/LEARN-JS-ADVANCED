// HTML Elements
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

// // Looping array dari karyawan
// const el = `<div class="karyawan">
//   ${Karyawan.map((k) => {
//     return `<ul>
//       <li>${k.nama}</li>
//       <li>${k.email}</li>
//     </ul>`;
//   }).join("")}
// </div>`;

// 3.Conditional
const player = [
  {
    position: "Defender",
    nama: "Sergio Ramos",
    patner: "Pepe",
  },
  {
    position: "Striker",
    nama: "Benzema",
  },
];

const el = `<div class="player">
  ${player
    .map((pos) => {
      return `<ul>
      <li> Nama Pemain :${pos.nama}</li>
      <li>Posisi sebagai : ${pos.position} ${
        pos.patner ? `dan patnernya ${pos.patner}` : ``
      }</li>
    </ul>`;
    })
    .join("")}
</div>`;

document.body.innerHTML = el;
