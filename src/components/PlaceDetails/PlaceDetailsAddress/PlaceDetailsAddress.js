import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./PlaceDetailsAddress.scss";

const PlaceDetailsAddress = ({
  place: {
    address: { streetName, streetNumber, postalCode, municipality, country },
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
        {streetName && (
          <Typography variant="subtitle1">
            {streetName} {streetNumber}
          </Typography>
        )}
        {postalCode && (
          <Typography variant="subtitle1">
            {postalCode} {municipality}, {country}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default PlaceDetailsAddress;
