// Ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// Pilih yang hanya bertuliskan "JAVASCRIPT LANJUTAN"
const selectedVideos = Array.from(videos)
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // Ambil durasi masing masing video
  .map((videoDuration) => videoDuration.dataset.duration)
  // Ubah durasi menjadi int, menit menjadi detik
  .map((durasi) => {
    const [menit, detik] = durasi.split(":").map(Number);
    return menit * 60 + detik;
  })
  // Jumlahkan semua detik
  .reduce((total, detik) => total + detik, 0);
// mengubah format  total detik menjadi format total waktu (jam:menit:detik)
const totalWaktu = (totalDetik) => {
  const jam = Math.floor(totalDetik / 3600);
  const menit = Math.floor((totalDetik - jam * 3600) / 60);
  const detik = totalDetik - jam * 3600 - menit * 60;
  return `${jam}:${menit}:${detik}`;
};
// Simpan ke DOM
const saveTotalDurasi = document.querySelector(".total-durasi");
saveTotalDurasi.innerText = totalWaktu(selectedVideos);
