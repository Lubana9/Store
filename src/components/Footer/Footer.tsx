import { useState } from "react";
import "./footer.css";
const Footer: React.FC = () => {
  const [inputVlue, setInputValue] = useState("");
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handelClear = () => {
    setInputValue("");
  };
  return (
    <div className="footer">
      <div>
        <ul>
          <li className="heading-footer">покупателям</li>
          <li className="list--foter">Каталог</li>
          <li className="list--foter">Акции</li>
          <li className="list--foter">Бренды</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="heading-footer">о нас</li>
          <li className="list--foter">О компании</li>
          <li className="list--foter">Новости</li>
          <li className="list--foter">Команда</li>
        </ul>
      </div>
      <div>
        <form className="footer--from" onSubmit={handleSubmit}>
          <label className="heading-footer">
            Узнайте первыми о новинках и акциях
          </label>
          <div className="email--input">
            <input
              className="footer--input"
              value={inputVlue}
              onChange={handelChange}
              type="email"
              placeholder="Адрес электронной почты"
            />
            <button onClick={handelClear}>x</button>
          </div>
          <input className="footer--submit" type="submit" value="Подписаться" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
