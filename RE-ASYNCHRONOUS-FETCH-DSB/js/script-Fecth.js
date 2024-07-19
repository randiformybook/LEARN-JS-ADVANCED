// Mengambil class SearchButton
const searchButton = document.querySelector(".searchButton");
// Ketika Search Button di klik
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  // Jalan progress API nya
  fetch(`http://www.omdbapi.com/?apikey=1cf40ec1&s=${inputKeyword.value}`)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((movie) => {
        cards += showCard(movie);
        const cardContainer = document.querySelector(".card-container");
        cardContainer.innerHTML = cards;
      });
      // Ketika Show Details Button di klik
      const detailButton = document.querySelectorAll(".detail-button");
      detailButton.forEach((b) => {
        b.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch(`http://www.omdbapi.com/?apikey=1cf40ec1&i=${imdbid}`)
            .then((response) => response.json())
            .then((response) => {
              const movieDetail = showDetails(response);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCard(movie) {
  return `<div class="col-sm-2 my-4">
                    <div class="card">
                    <img src=${movie.Poster} class="card-img-top" alt="" />
                      <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#movieDetails" data-imdbid ="${movie.imdbID}">Show Details</a>
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
