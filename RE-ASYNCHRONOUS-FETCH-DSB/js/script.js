$.ajax({
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=1cf40ec1&s=avengers",
  success: (results) => {
    const movies = results.Search;
    let cards = "";
    movies.forEach((movie) => {
      cards += cardsResult(movie);
    });
    $(".card-container").html(cards);
  },
  error: (e) => {
    console.error(e);
  },
});

function cardsResult(movie) {
  return `<div class="col-md-2 my-4">
                    <div class="card">
                      <img src=${movie.Poster} class="card-img-top" alt="" />
                      <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary">Show Details</a>
                      </div>
                    </div>
                  </div>`;
}
