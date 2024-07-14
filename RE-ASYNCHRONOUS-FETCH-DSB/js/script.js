$.ajax({
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=1cf40ec1&t=avengers",
  success: (result) => {
    console.log(result);
  },
  error: (e) => {
    console.error(e);
  },
});
