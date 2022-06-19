import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./PlaceDetailsAddress.scss";

const PlaceDetailsAddress = ({
  place: {
    location: { address, postcode, locality, country },
  },
}) => {
  return (
    <div className="place__location--address">
      <h6 className="place__location--title">
        <FontAwesomeIcon
          icon={faLocationDot}
          size="xl"
          className="place__location--icon"
        />
        Location
      </h6>

      <div className="place__location--details">
        {address && <Typography variant="subtitle1">{address}</Typography>}
        {postcode && (
          <Typography variant="subtitle1">
            {postcode} {locality}, {country}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default PlaceDetailsAddress;
