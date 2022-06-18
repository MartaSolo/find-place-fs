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
      <FontAwesomeIcon
        icon={faLocationDot}
        size="2x"
        className="place__location--icon"
        style={{ color: "rgba(204,68,108, 1)" }}
      />
      <div className="place__location--adress">
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
