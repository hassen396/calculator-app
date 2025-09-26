import Like from "../Components/Like";
import { getMovies } from "../Services/fakeMovieService";
import { useState } from "react";
import Pagination from "../Components/Pagination";

export default function Movies() {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize] = useState(3);
  const { length: count } = movies;
  if (count === 0) return <h1 className="text-3xl">No Movies are available</h1>;
  return (
    <div className="overflow-x-auto w-full">
      <p className="text-center text-2xl">Showng {count} movies</p>
      <table className="min-w-full border rounded-lg text-center text-2xl">
        <thead>
          <tr>
            <th>Title</th>
            <th>Gener</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like onLike={() => hanleLike(movie)} liked={movie.liked} />
              </td>
              <td>
                <button className=" cursor-pointer mx-3 px-3 my-2 rounded-lg bg-red-600 text-white hover:bg-red-700 active:scale-95" onClick={() => handleDelete(movie._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalCount={movies.length} pageSize={pageSize} onPageChange={handlePageChange} currentPage={3} />
    </div>
  );
  function handleDelete(_id) {
    return setMovies(movies.filter((m) => _id !== m._id));
  }

  function hanleLike(movie) {
    movie.liked = !movie.liked;
    const newMovies = [...movies];
    setMovies(newMovies);
  }

  function handlePageChange(page) {}
}
