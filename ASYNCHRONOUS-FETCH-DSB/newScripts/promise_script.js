//promise
//object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
//formulanya : Janji (terpenuhi/ tidak terpenuhi)
//di JS formula menjadi : state (fullfiled/ rejected/ pending)
// callback (resolve/ reject/ finally)
//aksi (kalau fulfilled : then/ dan kalau reject: catch)

// contoh 1, simple menggunakan promise
// let ditetapi = false;
// const janji1 = new Promise((resolve, reject) => {
//   //new Promise ialah create sebuah Object promise
//   if (ditetapi) {
//     resolve("Janji telah di tetapi");
//   } else {
//     reject("Janji tidak ditepati");
//   }
// });

// console.log("starting...");
// janji1.then((response) => console.log("OK : " + response)).catch((response) => console.log("Not OK : " + response));
// console.log("Ending...");

//contoh 2
// let ditepati2 = false;
// const janji2 = new Promise((resolve, reject)=>{
//     if(ditepati2){
//         setTimeout(()=>{
//             resolve ('Janji2 telah ditepatin juga');
//         },5000)
//     } else {
//         setTimeout(()=>{
//             reject ('Janji tidak bisa ditepati');
//         }, 5000)
//     }
// });

// console.log('mulai...');
// console.log(janji2
//     .finally(()=> console.log('On progress....'))
//     .then (() => console.log(janji2))
//     .catch (() =>console.log(janji2))
//     );
// console.log('selesai...')

//promise all

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "avangers",
        sutradara: "Randi Himawan",
        pemeran: "Himawan, Udo",
      },
    ]);
  }, 5000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "bandung",
        temp: 26,
        kondisi: "Cerah berawan",
      },
      {
        kota: "Medan",
        temp: 30,
        kondisi: "panas",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  //.then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
