import _ from "lodash";
export default function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const item = _(items).slice(startIndex).take(pageSize).value();
  return item;
}
