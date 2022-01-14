import "./body.css";
import ProductImg from "./ProductImg/productImg";
import ProductInfo from "./ProductInfo/ProductInfo";
const Body: React.FC = () => {
  return (
    <div className="body">
      <ProductImg />
      <ProductInfo />
    </div>
  );
};

export default Body;
