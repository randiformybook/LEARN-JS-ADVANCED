//fetch (Refractor)

//todo-------------------->
// Ambil Element dengan class search-button
const searchButton = document.querySelector('.search-button');
// Buat Button yang berfungsi ketika ditikan akan menjalanin search sesuai input.value yang dimasukan
searchButton.addEventListener('click', async function(){
try{
    const inputKeywordSearch = document.querySelector('.input-keyword-search');
    // Ketika user telah meng-input value ke keyword search, maka masukan nilai function dari getMovies ke variable movies.
        const movies = await getMovies(inputKeywordSearch.value);
        //jalankan function moviesCardUi dengan parameternya dari movie (nilai dari movies akan dipakai untuk dalam proses updateMoviesCardUi())
        updateMoviesCardUi(movies);
}catch(err){
    alert(err);
}
});

//todo-------------------->
//fungsi dari function getMovies ialah untuk membuat object promise menjadi object of Array.
//di function getMovies wajid memasukan return, untuk mengembalikan nilai setelah semua eksekusi selesai.
function getMovies(keyword){
    return fetch("http://www.omdbapi.com/?apikey=3d8d3feb&s=" + keyword)
    .then(results => {
        if (!results.ok){
            throw new Error(results.statusText);
        }
        return results.json();
    })
    .then(results => {
        if(results.Response === 'False'){
            throw new Error(results.Error);
        }
        return results.Search;
    })
}

// fungsi dari moviesCardUi, yang dimana ini berfungsi untuk mengaktifkan semua UI dari movie cards
function updateMoviesCardUi(movies){
    let cards ='';
    movies.forEach(movie => {
        cards += showCard(movie);
    });
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}
//todo-------------------->




//todo-------------------->
//ketika detail button ditekan ==>
//binding button
document.addEventListener('click', async function(e){
    if (e.target.classList.contains('modal-detail-button')){
        const imdbID = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetails(imdbID);
        updateMovieDetailUi(movieDetail);
    }
});

//todo-------------------->
function getMovieDetails(imdbID){
    return fetch("http://www.omdbapi.com/?apikey=3d8d3feb&i=" + imdbID)
    .then(results => results.json())
    .then(m => m)
};

function updateMovieDetailUi (s){
    const movieDetailInfo =  showMovieDetail(s);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetailInfo;
}
//todo-------------------->


// Function untuk menampilkan UI, nilai akan di masukan ke HTMl, sesuai dengan value yang di input
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