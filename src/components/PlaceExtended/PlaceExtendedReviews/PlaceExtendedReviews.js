import { Typography } from "@mui/material";
import "./PlaceExtendedReviews.scss";

const PlaceExtendedReviews = ({ reviews }) => {
  return (
    <div className="place__reviews">
      <Typography variant="h6" gutterBottom>
        Reviews:
      </Typography>

      {reviews.map((review, index) => {
        return (
          <div className="place__reviews--details" key={index}>
            <Typography variant="subtitle2" color="text.secondary">
              {review.date}:
            </Typography>
            <Typography variant="body1" sx={{ pb: "0.5rem" }}>
              {review.text}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default PlaceExtendedReviews;
