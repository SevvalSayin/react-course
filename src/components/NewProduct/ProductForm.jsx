import { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({products, onSaveProduct,setIsOpen}) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const titleChangeHandler = (event) => {
    setProductName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setProductPrice(parseInt(event.target.value));
  };

  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = {
      id:  products.length + 1,
      productName,
      productPrice,
      imageUrl,
    };

    // props.setProducts((prevState) => [...prevState, newProductData]);
    onSaveProduct(newProductData);
    setProductName("");
    setProductPrice("");
    setImageUrl("");
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz..."
          onChange={titleChangeHandler}
          value={productName}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı</label>
        <input
          type="number"
          placeholder="Ürün Fiyatı Giriniz..."
          onChange={priceChangeHandler}
          value={productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli</label>
        <input
          type="text"
          placeholder="Ürün Görseli Giriniz..."
          onChange={imageChangeHandler}
          value={imageUrl}
        />
      </div>
      <div className="form-buttons">
      <button className="product-form-button">Ürün Ekle</button>
      <button onClick={()=> setIsOpen(false)} className="product-form-button cancel" type="button">Vazgeç</button>
      </div>
    </form>
  );
};

export default ProductForm;
