import { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";

const NewProduct = ({ products, setProducts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSaveProduct = (newProductData) => {
    setProducts((prevState) => [newProductData, ...prevState]);
  };

  return (
    <div className="new-product-wrapper">
      <p>Şevval Sayın</p>
      {isOpen ? (
        <ProductForm
          setIsOpen={setIsOpen}
          onSaveProduct={onSaveProduct}
          products={products}
        />
      ) : (
        <AddProduct setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default NewProduct;
