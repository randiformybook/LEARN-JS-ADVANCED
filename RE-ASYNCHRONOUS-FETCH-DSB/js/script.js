$.ajax({
  url: "http://www.omdbapi.com/?apikey=1cf40ec1&s=avengers",
  success: (results) => {
    const movies = results.Search;
    let cards = "";
    movies.forEach((movie) => {
      cards += showCard(movie);
    });
    $(".card-container").html(cards);

    // Ketika Button Show Details di Click
    $(".detailButton").on("click", function () {
      console.log($(this).data("imdbid"));
      $.ajax({
        url:
          "http://www.omdbapi.com/?apikey=1cf40ec1&i=" + $(this).data("imdbid"),
        success: (mdetail) => {
          let movieDetail = showDetails(mdetail);
          $(".modal-body").html(movieDetail);
        },
      });
    });
  },
  error: (e) => {
    console.error(e);
  },
});

function showCard(movie) {
  return `<div class="col-md-3 my-4">
                    <div class="card">
                      <img src=${movie.Poster} class="card-img-top" alt="" />
                      <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary detailButton" data-bs-toggle="modal" data-bs-target="#movieDetails" data-imdbid ="${movie.imdbID}">Show Details</a>
                      </div>
                    </div>
                  </div>`;
}

function showDetails(mdetail) {
  return `<div class="container-fluid">
                  <div class="row">
                    <div class="col-md-3">
                      <img src="${mdetail.Poster}" class="img-fluid" />
                    </div>
                    <div class="col-md">
                      <ul class="list-group">
                        <li class="list-group-item"><h4>${mdetail.Title} (${mdetail.Year})</h4></li>
                        <li class="list-group-item">
                          <strong>Director : </strong>${mdetail.Director}
                        </li>
                        <li class="list-group-item">
                          <strong>Actors : </strong>${mdetail.Actors}
                        </li>
                        <li class="list-group-item">
                          <strong>Writer :</strong>${mdetail.Writer}
                        </li>
                        <li class="list-group-item">
                          <strong>Plot : </strong>${mdetail.Plot}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>`;
}
