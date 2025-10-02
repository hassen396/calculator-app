import { PRODUCTS } from "../Services/mokeDB";
import { Link } from "react-router-dom";
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
    <div>
      <div>
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/products/2?name=abc&price=11" >
        <button className="bg-amber-600 active:scale-90 rounded px-1 mt-10 ">
          details
        </button>
        </Link>
      </div>
    </div>
  );
}
