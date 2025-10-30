import Product from "./product";

async function productList() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

export default async function Productserverapipage() {
  let products = await productList();
  //   console.log("========",products);
  return (
    <div>
      {products.map((items) => {
        return (
          <div key={items.id}>
            Name: {items.title}
            <br />
            <br />
            <Product id={items.id}/>
            <br />
          </div>
        );
      })}
    </div>
  );
}
