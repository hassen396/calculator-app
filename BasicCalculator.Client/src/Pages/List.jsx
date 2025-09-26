const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
function List() {


  return (
    <>
      <ol type="A">
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ol>
    </>
  );
}
export default List;
