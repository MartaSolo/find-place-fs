import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlaceExtended } from "../../actions/placeExtendedActions";
import Loader from "../Loader";
import PlaceExtendedDesc from "./PlaceExtendedDesc";
import PlaceExtendedRating from "./PlaceExtendedRating";
import PlaceExtendedReviews from "./PlaceExtendedReviews";
import PlaceExtendedPopHours from "./PlaceExtendedPopHours";
import Masonry from "react-masonry-css";
import "./PlaceExtended.scss";

const PlaceExtended = ({
  id,
  placeExtended: { placeExtended },
  getPlaceExtended,
}) => {
  useEffect(() => {
    getPlaceExtended(id);
  }, [id]);

  console.log(placeExtended);

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    800: 1,
  };

  if (placeExtended) {
    return (
      <div className="place__detailsExt">
        {placeExtended.description && (
          <PlaceExtendedDesc description={placeExtended.description} />
        )}

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {placeExtended.popularHours && (
            <PlaceExtendedPopHours popularHours={placeExtended.popularHours} />
          )}

          {placeExtended.rating && (
            <PlaceExtendedRating rating={placeExtended.rating} />
          )}
        </Masonry>

        {placeExtended.reviews && (
          <PlaceExtendedReviews reviews={placeExtended.reviews} />
        )}
      </div>
    );
  } else {
    return <Loader />;
  }
};

PlaceExtended.propTypes = {
  placeExtended: PropTypes.object.isRequired,
  getPlaceExtended: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  placeExtended: state.placeExtended,
});

export default connect(mapStateToProps, { getPlaceExtended })(PlaceExtended);
