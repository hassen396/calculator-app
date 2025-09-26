import * as genresAPI from "./fakeGenreService";


let movies = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Terminator",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 6,
      dailyRentalRate: 2.5,
      publishDate: "2018-01-03T19:04:28.809Z",
      liked: false,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Die Hard",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 5,
      dailyRentalRate: 2.5,
      liked: false,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "Get Out",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 8,
      dailyRentalRate: 3.0,
      liked: false,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471818",
      title: "Trip to Italy",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5,
      liked: true,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      title: "Airplane",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5,
      liked: false,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471820",
      title: "Wedding Crashers",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5,
      liked: false,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471821",
      title: "Gone Girl",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 5,
      dailyRentalRate: 4.0,
      liked: false,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471822",
      title: "The Sixth Sense",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 4,
      dailyRentalRate: 3.5,
      liked: false,
    }
     
  ];
  
  export function getMovies() {
    return movies;
  }
  
  export function getMovie(id) {
    return movies.find(m => m._id === id);
  }

export function saveMovie(movie)
{
    if (!movie._id) {
        movie._id = Date.now().toString();  // Generate a unique ID
        movies.push(movie);  // Add new movie to the array
      }

    let movieInDb = movies.find(m => m._id === movie) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.getGenres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    return movieInDb;
}
//delete a movie
export function deleteMovie(movieId)
{
    movies = movies.filter(m => m._id !== movieId);
    return movies;
}