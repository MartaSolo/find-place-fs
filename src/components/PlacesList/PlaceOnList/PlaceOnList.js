import { Link } from "react-router-dom";
import {
  CardContent,
  Typography,
  Card,
  CardActions,
  Button,
} from "@mui/material";

const PlaceOnList = ({
  place: {
    name,
    location: { address, postcode, locality, country },
  },
}) => {
  return (
    <div className="place__card">
      <Card variant="outlined" sx={{ mb: "0.5rem" }}>
        <CardContent variant="outlined">
          <Typography variant="h6">{name}</Typography>

          {address && (
            <Typography variant="subtitle2" color="textSecondary">
              {address},{" "}
            </Typography>
          )}

          <Typography variant="subtitle2" color="textSecondary">
            {postcode} {locality}, {country}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">
            <Link to={`/places/${name}`}>Show details</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PlaceOnList;
