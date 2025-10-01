import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table({columns, onSort, sortColumn, paginatedMovies, onLike, onDelete}) {
  return (
    <div className=" justify-center">
      <table className="w-full divide-y  divide-gray-200 border ">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody data={paginatedMovies} onLike={onLike} onDelete={onDelete} columns={columns} />
      </table>
    </div>
  );
};
export default Table;
