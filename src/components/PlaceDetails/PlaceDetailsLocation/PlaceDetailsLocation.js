import PlaceDetailsAddress from "../PlaceDetailsAddress";
import PlaceDetailsMap from "../PlaceDetailsMap";
import "./PlaceDetailsLocation.scss";

const PlaceDetailsLocation = ({ place }) => {
  return (
    <div className="place__location">
      <div className="place__location--card">
        <div className="place__location--desc">
          <PlaceDetailsAddress place={place} />
        </div>

        <div className="place__location--map">
          <PlaceDetailsMap place={place} />
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailsLocation;
