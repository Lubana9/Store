import "./productImg.css";
import baby from "../img/baby_y.png";
const ProductImg: React.FC = () => {
  return (
    <div className="product--img">
      <img className="baby--img" src={baby} alt="" />
    </div>
  );
};

export default ProductImg;
