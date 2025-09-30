import { PRODUCTS } from "./mokeDB";

export default function Products() {
  return <FilterableProductTable products={PRODUCTS} />;
}

function FilterableProductTable({ products }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function SearchBar() {
  return (
    <form className="flex flex-col w-full ">
      <input type="text" placeholder="search..." />
      <label>
        <input type="checkbox" />
        {` `}
        Only show products in stock
      </label>
    </form>
  );
}
function ProductTable({ products }) {
  return (
    <table className="w-full">
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
