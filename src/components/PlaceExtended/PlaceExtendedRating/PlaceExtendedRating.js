import { Typography, Rating } from "@mui/material";
import "./PlaceExtendedRating.scss";

const PlaceExtendedRating = ({ rating }) => {
  if (rating.totalRatings) {
    return (
      <div className="place__rating">
        <Typography variant="h6" gutterBottom>
          Raitng:
        </Typography>

        <div className="place__rating--details">
          <div className="place__rating--stars">
            <Rating
              name="half-rating-read"
              size="small"
              value={rating.value}
              precision={0.5}
              max={rating.maxValue}
              readOnly
            />
            <div className="place__rating--value">
              {rating.value.toFixed(1)}
            </div>
          </div>
          <div className="place__rating--reviews">
            {rating.totalRatings > 1
              ? `${rating.totalRatings} reviews`
              : `${rating.totalRatings} review`}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PlaceExtendedRating;
