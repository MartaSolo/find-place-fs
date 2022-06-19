import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetPlacePhotos } from "../../../actions/placePhotosActions";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./PlaceDetailsHeader.scss";

const PlaceDetailsHeader = ({ resetPlacePhotos }) => {
  const deletePlacePhotos = () => {
    resetPlacePhotos();
  };
  return (
    <header className="header__place">
      <div className="header__place--title">
        <Typography variant="h1">Find a place near you</Typography>
        <Link
          to="/"
          className="header__place--link"
          onClick={deletePlacePhotos}
        >
          Home
        </Link>
      </div>
    </header>
  );
};

PlaceDetailsHeader.propTypes = {
  resetPlacePhotos: PropTypes.func.isRequired,
};

export default connect(null, { resetPlacePhotos })(PlaceDetailsHeader);

// import { Link } from "react-router-dom";
// import { Typography } from "@mui/material";
// import "./PlaceDetailsHeader.scss";

// const PlaceDetailsHeader = () => {
//   return (
//     <header className="header__place">
//       <div className="header__place--title">
//         <Typography variant="h1">Find a place near you</Typography>
//         <Link to="/" className="header__place--link">
//           Home
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default PlaceDetailsHeader;
