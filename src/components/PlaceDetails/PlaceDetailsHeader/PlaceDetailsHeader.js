import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetPlacePhotos } from "../../../actions/placePhotosActions";
import { resetPlaceTips } from "../../../actions/placeTipsActions";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./PlaceDetailsHeader.scss";

const PlaceDetailsHeader = ({ resetPlacePhotos, resetPlaceTips }) => {
  const resetPlaceStates = () => {
    resetPlacePhotos();
    resetPlaceTips();
  };
  return (
    <header className="header__place">
      <div className="header__place--title">
        <Typography variant="h1">Find a place near you</Typography>
        <Link to="/" className="header__place--link" onClick={resetPlaceStates}>
          Home
        </Link>
      </div>
    </header>
  );
};

PlaceDetailsHeader.propTypes = {
  resetPlacePhotos: PropTypes.func.isRequired,
  resetPlaceTips: PropTypes.func.isRequired,
};

export default connect(null, { resetPlacePhotos, resetPlaceTips })(
  PlaceDetailsHeader
);
