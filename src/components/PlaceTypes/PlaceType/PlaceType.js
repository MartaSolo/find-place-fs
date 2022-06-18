import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PlaceType.scss";

const PlaceType = ({
  inputId,
  inputValue,
  onChange,
  htmlFor,
  labelClassName,
  icon,
  label,
}) => {
  return (
    <>
      <input
        className="radio__input"
        type="radio"
        name="type"
        id={inputId}
        value={inputValue}
        onChange={onChange}
      />
      <label name="type" htmlFor={htmlFor} className={labelClassName}>
        <FontAwesomeIcon icon={icon} size="xl" className="radio__icon" />
        {label}
      </label>
    </>
  );
};

export default PlaceType;
