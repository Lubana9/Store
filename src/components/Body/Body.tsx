import "./body.css";
import MoreProduct from "./MoreProduct/MoreProduct";
import ProductImg from "./ProductImg/productImg";
import ProductInfo from "./ProductInfo/ProductInfo";
const Body: React.FC = () => {
  return (
    <>
      <div className="body">
        <ProductImg />
        <ProductInfo />
      </div>
      <MoreProduct />
    </>
  );
};

export default Body;
