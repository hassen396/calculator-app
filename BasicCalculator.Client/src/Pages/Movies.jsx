import Like from "../Components/Common/Like";
import { getMovies } from "../Services/fakeMovieService";
import { getGenres } from "../Services/fakeGenreService";
import _ from "lodash";
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import paginate from "../utils/paginate";
import Filter from "../Components/filter";
import MoviesTable from "../Components/MoviesTable";

export default function Movies() {
  const [movies, setMovies] = useState(getMovies());
  const [genres] = useState(getGenres());
  const [selectedGenre, setSelectedItem] = useState(0);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);

  const paginatedMovies = paginate(sorted, currentPage, pageSize);
  const { length: count } = movies;
  const { length: currentPageMovieCount } = paginatedMovies;

  useEffect(() => {
    if (paginatedMovies.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [paginatedMovies, currentPage]);
  const value =
    count === 0
      ? "No Movies are available"
      : `Showng ${currentPageMovieCount} of ${count} movies from the database`;

  return (
    <div className="sm:flex gap-5 w-full">
      <Filter onItemSelect={handleGenreSelect} items={genres} selectedItem={selectedGenre} />
      <div className="w-full">
        <p className="text-center text-2xl">{value}</p>
        <MoviesTable
          paginatedMovies={paginatedMovies}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
          sortColumn={sortColumn}
        />
        <Pagination
          totalCount={movies.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
  function handleDelete(_id) {
    setMovies(movies.filter((m) => _id !== m._id));
  }

  function handleLike(movie) {
    movie.liked = !movie.liked;
    const newMovies = [...movies];
    setMovies(newMovies);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleGenreSelect(item) {
    if (item == 0) {
      setSelectedItem(item);
      return setMovies(getMovies());
    }
    const newMovies = getMovies().filter((m) => m.genre._id == item._id);
    setMovies(newMovies);
    setSelectedItem(item);
  }

  function handleSort(sortCol) {
    setSortColumn(sortCol);
  }
}
