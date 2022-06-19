import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./PhotoSliderBtn.scss";

const PhotoSliderBtn = ({ direction, moveSlide }) => {
  return (
    <button
      className={
        direction === "next"
          ? "place__photos--btn next"
          : "place__photos--btn prev"
      }
      onClick={moveSlide}
    >
      <FontAwesomeIcon
        icon={direction === "next" ? faAngleRight : faAngleLeft}
        className="place__photos--btn-icon"
      />
    </button>
  );
};

export default PhotoSliderBtn;
