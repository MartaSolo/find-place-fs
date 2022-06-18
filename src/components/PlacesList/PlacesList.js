import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlaces } from "../../actions/placesActions";
import PlaceOnList from "./PlaceOnList";
import Loader from "../Loader";
import "./PlacesList.scss";

const PlacesList = ({ places: { places }, getPlaces, type, bounds }) => {
  useEffect(() => {
    getPlaces(
      bounds.neLatitude,
      bounds.neLongitude,
      bounds.swLatitude,
      bounds.swLongitude,
      type
    );
  }, [bounds, type]);

  console.log("places", places);

  if (places) {
    return (
      <section className="places__list">
        {places.map((place) => {
          return <PlaceOnList key={place.fsq_id} place={place} />;
        })}
      </section>
    );
  } else {
    return <Loader />;
  }
};

PlacesList.propTypes = {
  places: PropTypes.object.isRequired,
  getPlaces: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  bounds: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  places: state.places,
  type: state.type,
  bounds: state.bounds,
});

export default connect(mapStateToProps, { getPlaces })(PlacesList);
