$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=3d8d3feb&s=" + $(".input-keyword-search").val(),
    success: (results) => {
      const movies = results.Search;
      //ini untuk merubah API search menjadi array
      let cards = "";
      movies.forEach((movie) => {
        //karena data API sudah menjadi array, maka bisa di loop dengan menggunakan forEach.
        cards += theCard(movie);
      });
      $(".movie-container").html(cards);

      //ketika tombol detail ID
      $(".modal-detail-button").on("click", function () {
        //------------ start of modal ---------------------
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=3d8d3feb&i=" + $(this).data("imdbid"),
          success: (s) => {
            const movieDetail = theMovieDetail(s);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
        //------------ end of modal ---------------------
      });
    },
    error: (e) => {
      console.log(e.responseText);
      //responseText berfungsi untuk mengembalikan data dari API menjadi string
    },
  });
});

function theCard(movie) {
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

function theMovieDetail(s) {
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
