import _ from "lodash";

function createKey(item, column) {
  return item._id + (column.path || column.key);
}
const renderCell = (item, col) => {
  if (col.content) return col.content(item);
  return _.get(item, col.path);
};

const TableBody = ({ data, columns }) => {
  return (
    <tbody className="divide-y divide-gray-200 border">
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((col) => (
            <td key={createKey(item, col)} className="px-6 py-4 whitespace-nowrap text-xl border">
              {renderCell(item, col)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
