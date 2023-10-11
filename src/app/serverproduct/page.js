import Product from "./product";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function page() {
  let products = await productList();

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <div key={item.key}>
            <h3>Name: {item.title}</h3>
            <Product price={item.price}/>
        </div>
      ))}
    </div>
  );
}
