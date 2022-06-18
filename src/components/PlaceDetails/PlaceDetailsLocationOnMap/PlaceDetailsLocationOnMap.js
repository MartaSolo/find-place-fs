import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const PlaceDetailsLocationOnMap = () => {
  return (
    <div className="place__coordinates">
      <FontAwesomeIcon
        icon={faLocationDot}
        size="3x"
        transform="up-12 left-4"
        style={{ color: "rgba(204,68,108, 1)" }}
      />
    </div>
  );
};

export default PlaceDetailsLocationOnMap;
