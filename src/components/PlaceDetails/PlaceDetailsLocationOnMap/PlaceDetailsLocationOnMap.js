import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./PlaceDetailsLocationOnMap.scss";

const PlaceDetailsLocationOnMap = () => {
  return (
    <div className="place__coordinates">
      <FontAwesomeIcon
        icon={faLocationDot}
        size="3x"
        transform="up-12 left-4"
        className="place__coordinates--icon"
      />
    </div>
  );
};

export default PlaceDetailsLocationOnMap;
