import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PlaceDetailsHeader from "../../components/PlaceDetails/PlaceDetailsHeader";
import PlaceDetailsName from "../../components/PlaceDetails/PlaceDetailsName";
import PlaceDetailsLocation from "../../components/PlaceDetails/PlaceDetailsLocation";
import PlaceDetailsFooter from "../../components/PlaceDetails/PlaceDetailsFooter";
import PlaceExtended from "../../components/PlaceExtended";
import "./PlaceDetails.scss";

const PlaceDetails = ({ places: { places } }) => {
  const { name } = useParams();

  return (
    <div className="place__page">
      <PlaceDetailsHeader />

      <section className="place">
        {places
          .filter((place) => {
            return place.poi.name === name;
          })
          .map((place) => {
            return (
              <div key={place.id} className="place__details">
                <PlaceDetailsName place={place} />

                <PlaceDetailsLocation place={place} />

                <PlaceExtended id={place.dataSources.poiDetails[0].id} />
              </div>
            );
          })}
      </section>
      <PlaceDetailsFooter />
    </div>
  );
};

PlaceDetails.propTypes = {
  places: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  places: state.places,
});

export default connect(mapStateToProps)(PlaceDetails);
