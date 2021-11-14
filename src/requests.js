const API_KEY="6bcb550f39b70af7ec00b18ea7b2d5ad";

const requests={
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetFlixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorroMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
}

export default requests;