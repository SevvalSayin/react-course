import ProductItem from "./ProductItem";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  console.log("products ==> ", products);

  return (
    <div className="product-wrapper">
      <NewProduct products={products} setProducts={setProducts} />
      <h4>SURA HOTEL</h4>
      <div className="products">
        {products.length === 0 ? (
          <p>Ürün Giriniz</p>
           ):(
           products.map((product) => (
        <ProductItem product={product} key={product.id} products={products}setProducts={setProducts}/>
        )) 
        )}
      </div>
    </div>
  );
};

export default Products;
