import type { Key } from "react";
import { getMovies } from "../Services/fakeMovieService";
import { useState } from "react";
export default function Movies() {
  const [movies, setMovies] = useState(getMovies());
  const {length:count} = movies;
  if (count === 0)
    return <h1 className="text-3xl">No Movies are available</h1>;
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(
            (movie: movieType) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="bg-red-600 rounded-3xl my-2"
                    onClick={() => handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
  function handleDelete(_id: Key) {
    return setMovies(movies.filter((m: movieType) => _id !== m._id));
  }
  type movieType = {
              _id: Key;
              title: string;
              genre: { name: string };
              numberInStock: number;
              dailyRentalRate: number;
            }
}
