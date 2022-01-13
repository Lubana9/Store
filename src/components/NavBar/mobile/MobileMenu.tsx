import "./mobileMenu.css";
const MobileMenu: React.FC = () => {
  return (
    <ul className="mobileMenu">
      <li className="mobile--option">
        <a href="#">постельное белье</a>
      </li>
      <li className="mobile--option">
        <a href="#">одежда для дома</a>
      </li>
      <li className="mobile--option">
        <a href="#">Одежда для улицы</a>
      </li>
      <li className="mobile--option">
        <a href="#">Выход</a>
      </li>
    </ul>
  );
};

export default MobileMenu;
