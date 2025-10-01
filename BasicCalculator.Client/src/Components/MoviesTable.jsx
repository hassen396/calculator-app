import Like from "./Common/Like";
import Table from "./Common/Table";

const MoviesTable = ({ paginatedMovies, onLike, onDelete, onSort, sortColumn }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      label: "Action",
      content: (movie) => <Like onLike={() => onLike(movie)} liked={movie.liked} />,
    },
    {
      key: "delete",

      content: (movie) => (
        <a
          className="text-left cursor-pointer mx-3  rounded-lg text-red-600  hover:text-red-500 dark:text-red-500 dark:hover:text-red-600 active:scale-95"
          onClick={() => onDelete(movie._id)}>
          Delete
        </a>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      onSort={onSort}
      sortColumn={sortColumn}
      paginatedMovies={paginatedMovies}
      onLike={onLike}
      onDelete={onDelete}
    />
  );
};

export default MoviesTable;
