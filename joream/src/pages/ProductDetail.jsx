import Pics from "../components/Pics";
import ProductSelect from "../components/ProductSelect";
import SizeTable from "../components/SizeTable";

const ProductDetail = () => {
  return (
    <div style={{ padding: "0 150px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
        <Pics />
        <ProductSelect />
      </div>
      <SizeTable style={{ marginTop: "50px" }} />
    </div>
  );
};

export default ProductDetail;
