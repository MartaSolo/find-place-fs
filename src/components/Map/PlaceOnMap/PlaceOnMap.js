import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./PlaceOnMap.scss";

const PlaceOnMap = ({ place: { name } }) => {
  const [showInfo, setShowInfo] = useState(null);

  const handleToggleShowInfo = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div className="place__map" onClick={handleToggleShowInfo}>
      {!showInfo && (
        <div className="place__map--location">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="4x"
            transform="up-12 left-4"
            className="places__map--icon"
          />
        </div>
      )}

      {showInfo && (
        <div className="place__map--card">
          <div className="place__map--info">
            <h6 className="place__map--name">{name}</h6>
            <button type="button" className="place__map--close">
              <FontAwesomeIcon
                icon={faRectangleXmark}
                size="2x"
                transform="up-3 left-5"
                className="places__map--close-icon"
              />
            </button>
          </div>

          <Link to={`/places/${name}`} className="place__map--link">
            Show details
          </Link>
        </div>
      )}
    </div>
  );
};

export default PlaceOnMap;
