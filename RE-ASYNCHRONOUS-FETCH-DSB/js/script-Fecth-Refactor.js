// 1. Mengambil class dari search button
const searchButton = document.querySelector(".searchButton");
// Ketika Search's button di klik
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getmovies(inputKeyword.value);
    updateMovieUI(movies);
  } catch (err) {
    alert(err.message);
  }
});

// ketika Show Detail Button di klik
document.addEventListener("click", async function (e) {
  try {
    if (e.target.classList.contains("detail-button")) {
      const imdbid = e.target.dataset.imdbid;
      const movieDetails = await getdetails(imdbid);
      updateDetailsUI(movieDetails);
    }
  } catch (err) {
    alert(err.message);
  }
});

// function untuk mendapatkan data API Movies
function getmovies(keyword) {
  return (
    fetch(`http://www.omdbapi.com/?apikey=1cf40ec1&s=${keyword}`)
      // .then((response) => response.json())
      // .then((response) => response.Search);
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((response) => {
        // console.log(response);
        if (response.Response === "False") {
          if (response.Error === "Incorrect IMDb ID.")
            throw new Error("Please write movie name you want to searh");
          throw new Error(response.Error);
        }
        return response.Search;
      })
  );
}

// function untuk mendapatkan data API detail dari Movie
function getdetails(detail) {
  return fetch(`http://www.omdbapi.com/?apikey=1cf40ec1&i=${detail}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status + ": Unauthorized");
      return response.json();
    })
    .then((response) => response);
}

// function setelah mendapatkan API dan Update UI webpage nya
function updateMovieUI(movies) {
  let cards = "";
  movies.forEach((movie) => {
    cards += showCard(movie);
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = cards;
  });
}

// function untuk meng-Update UI Movie Detail
function updateDetailsUI(detail) {
  const movieDetail = showDetails(detail);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

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
