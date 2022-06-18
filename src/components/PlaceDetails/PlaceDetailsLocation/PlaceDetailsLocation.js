import PlaceDetailsAddress from "../PlaceDetailsAddress";
import PlaceDetailsMap from "../PlaceDetailsMap";
import PlaceDetailsContact from "../PlaceDetailsContact";
import { Typography } from "@mui/material";
import "./PlaceDetailsLocation.scss";

const PlaceDetailsLocation = ({ place }) => {
  return (
    <div className="place__location">
      <Typography variant="h6" gutterBottom>
        Location
      </Typography>

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
