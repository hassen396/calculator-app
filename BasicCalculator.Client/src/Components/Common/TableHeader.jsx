export default function TableHeader({ columns, sortColumn, onSort }) {
    
  const renderSortIcon = (column) => {
    if (sortColumn.path !== column.path || column.key) return null;
    if (sortColumn.order === "asc") return <span> ▲</span>;
    return <span> ▼</span>;
  };

  function raiseSort(path) {
    const sortCol = { ...sortColumn };
    if (path == sortCol.path) {
      sortCol.order = sortCol.order == "asc" ? "desc" : "asc";
    } else {
      sortCol.path = path;
      sortCol.order = "asc";
    }
    onSort(sortCol);
  }
  return (
    // className={paginatedMovies.length ? "bg-gray-50  dark:bg-zinc-950" : "hidden"}
    <thead className="">
      <tr>
        {columns.map((col) => (
          <th colSpan={(col.label === "Action")? "2":"1"} key={col.path || col.key}
            onClick={() => raiseSort(col.path)}
            scope="col"
            className={"cursor-pointer min-w-14 h-12 px-6 py-3 text-left font-bold uppercase tracking-wider whitespace-nowrap border " + ((col.key === 'delete')? "hidden":"")}>
            {col.label} {renderSortIcon(col)}
          </th>
        ))}
      </tr>
    </thead>
  );
}
