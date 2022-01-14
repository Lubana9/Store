import AddToCart from "./AddToCart/AddToCart";
import "./productInfo.css";
import SaleBtn from "./SaleBtn/SaleBtn";
import Select from "./Select/Select";
const ProductInfo: React.FC = () => {
  return (
    <div className="ProductInfo">
      <div className="product--title">Пижама для девочек</div>
      <div className="product_articl">Арт. 02765/46</div>
      <div className="product_reviews">
        <span className="rev--title">Отзывы</span>
        <span className="rev-stars">★ ★ ★ ★ ☆</span>
        <span className="rev--count">14 отзывов</span>{" "}
        <span className="rev_arow">
          <svg
            width="14"
            height="14"
            viewBox="0 0 10 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L9 8L1 14.5" stroke="#333333" />
          </svg>
        </span>
      </div>
      <div className="produt_cost">
        <span className="new_cost">800 ₽</span>
        <span className="old_cost">
          <s>1500 ₽ </s>{" "}
        </span>{" "}
        <span className="rev_arow">
          {" "}
          <svg
            width="14"
            height="15"
            viewBox="0 0 10 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L9 8L1 14.5" stroke="#828282" />
          </svg>
        </span>
      </div>
      <SaleBtn />
      <Select />
      <div className="url--btn">
        <a href="#">Определить размер</a>
      </div>
      <AddToCart />
      <div className="url--btn">
        <a href="#">Купить в 1 клик</a>
      </div>
      <div className="hor-line"></div>
      <div className="url--btn description">
        <svg
          className="prod-icon"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <g>
            <rect fill="none" height="14" width="14" />
            <path d="M21.6,18.2L13,11.75v-0.91c1.65-0.49,2.8-2.17,2.43-4.05c-0.26-1.31-1.3-2.4-2.61-2.7C10.54,3.57,8.5,5.3,8.5,7.5h2 C10.5,6.67,11.17,6,12,6s1.5,0.67,1.5,1.5c0,0.84-0.69,1.52-1.53,1.5C11.43,8.99,11,9.45,11,9.99v1.76L2.4,18.2 C1.63,18.78,2.04,20,3,20h9h9C21.96,20,22.37,18.78,21.6,18.2z M6,18l6-4.5l6,4.5H6z" />
          </g>
        </svg>
        <a href="#">Описание товара</a>
      </div>
      <div className="url--btn description">
        <svg
          className="prod-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>

        <a href="#">Доставка и возврат</a>
      </div>
      <div className="url--btn description">
        <svg
          className="prod-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
        <a href="#">Способы оплаты</a>
      </div>
    </div>
  );
};

export default ProductInfo;
