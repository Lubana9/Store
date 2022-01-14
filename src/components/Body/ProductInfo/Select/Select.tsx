import "./select.css";
const Select = () => {
  return (
    <select className="select" name="size" id="size">
      <option value="size" selected hidden>
        Выбрать размер
      </option>
      <option className="select--option" value="1">
        1
      </option>
      <option className="select--option" value="2">
        2
      </option>
      <option className="select--option" value="3">
        3
      </option>
    </select>
  );
};

export default Select;
