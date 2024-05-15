const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">SURA </span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
