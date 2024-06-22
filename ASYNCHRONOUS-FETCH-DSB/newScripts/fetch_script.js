// Fetch

// Seleksi element dengan class search-button
const searchButton = document.querySelector(".search-button");
// Buat search button menjadi fungsi untuk ketika ditekan akan menjalankan fungsi
searchButton.addEventListener("click", function () {
  // Ambil keywork search
  const inputKeywordSearch = document.querySelector(".input-keyword-search");
  // Masukan url ke Fetch
  fetch("http://www.omdbapi.com/?apikey=3d8d3feb&s=" + inputKeywordSearch.value)
    // masukan ke process:
    // Ambil data menggunakan json, tetapi data akan berbentuk promise
    .then((results) => results.json())
    // jangan lupa, bahwasanya json is methode,yg namanya metode dikasih () pada ujungnya.
    // karena data berbentuk promise, maka kita tambahkan then lagi dan jalankan proses berikutnya
    .then((results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((movie) => {
        cards += showCard(movie);
      });
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      //ketika tombol detail ditekan ===>
      // Pastikan ini masih di dalam then, karena data fetchnya sudah dijadikan ke promise,dan terus sudah di jalanin oleh then berikutnya
      // Show Movie Detail
      const detailButton = document.querySelectorAll(".modal-detail-button");

      detailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbID = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=3d8d3feb&i=" + imdbID)
            //jalankan then nya :
            .then((results) => results.json())
            .then((s) => {
              const movieDetail = showMovieDetail(s);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCard(movie) {
  return `<div class="col-md-3 my-2">
                <div class="card">
                  <img src= ${movie.Poster} class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show details</a>
                  </div>
                </div>
              </div>`;
}

function showMovieDetail(s) {
  return `<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src=${s.Poster} class="img-fluid" />
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item"><h5><strong>Title : ${s.Title} ${s.Year}</strong></h5></li>
                <li class="list-group-item">
                  <h7><strong>Director :</strong> ${s.Director}</h7>
                </li>
                <li class="list-group-item">
                  <h7><strong>Actors :</strong> ${s.Actors}</h7>
                </li>
                <li class="list-group-item">
                  <h7><strong>Writer :</strong> ${s.Writer}</h7>
                </li>
                <li class="list-group-item">
                  <h7><strong>Plot :</strong> ${s.Plot}</h7>
                </li>
              </ul>
            </div>
          </div>
        </div>`;
}
