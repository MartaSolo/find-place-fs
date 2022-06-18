import { Typography } from "@mui/material";
import "./PlaceExtendedDesc.scss";

const PlaceExtendedDesc = ({ description }) => {
  return (
    <div className="place__description">
      <Typography variant="h6" gutterBottom>
        Description
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </div>
  );
};

export default PlaceExtendedDesc;
