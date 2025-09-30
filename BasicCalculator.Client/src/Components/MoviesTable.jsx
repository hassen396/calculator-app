import TableHeader from "./Common/TableHeader";
import TableBody from "./Common/TableBody";
import Like from "./Common/Like";

const MoviesTable = ({ paginatedMovies, onLike, onDelete, onSort, sortColumn }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like", content: (movie) => <Like onLike={() => onLike(movie)} liked={movie.liked} /> },
    {
      key: "delete",
      content: (movie) => (
        <a
          className="text-left cursor-pointer mx-3  rounded-lg0 text-red-600  hover:text-red-500 dark:text-red-500 dark:hover:text-red-600 active:scale-95"
          onClick={() => onDelete(movie._id)}>
          Delete
        </a>
      ),
    },
  ];
  return (
    <div className="overflow-x-auto w-full">
      <table className=" sm:w-full divide-x divide-y  divide-gray-200 border overflow-x-scroll">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
          numOfData={paginatedMovies.length}
        />
        <TableBody data={paginatedMovies} onLike={onLike} onDelete={onDelete} columns={columns} />
      </table>
    </div>
  );
};

export default MoviesTable;
