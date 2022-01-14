import "./moreProduct.css";
import baby_b from "../img/baby_b.png";
import baby_c from "../img/baby_c.png";
import baby_d from "../img/baby_d.png";
import baby_g from "../img/baby_g.png";
import baby_o from "../img/baby_o.png";

const MoreProduct = () => {
  return (
    <>
      {" "}
      <div className="url--btn more_product_btn">
        <a href="#">Посмотреть все стили</a>
      </div>
      <div className="more_products">
        <img src={baby_g} alt="" />
        <img src={baby_b} alt="" />
        <img src={baby_d} alt="" />
        <img src={baby_o} alt="" />
        <img src={baby_c} alt="" />
      </div>
    </>
  );
};

export default MoreProduct;
