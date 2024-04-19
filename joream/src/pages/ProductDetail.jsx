import Pics from "../components/Pics";
import ProductSelect from "../components/ProductSelect";

const ProductDetail = () => {
  return (
    <div style={{ padding: "0 150px" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Pics />
        <ProductSelect />
      </div>
    </div>
  );
};

export default ProductDetail;
