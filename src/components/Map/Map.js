import { useEffect } from "react";
import GoogleMap from "google-map-react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getLatLong } from "../../actions/latlongActions";
import { getBounds } from "../../actions/boundsActions";
import PlaceOnMap from "./PlaceOnMap";
import UserLocationOnMap from "./UserLocationOnMap";
import "./Map.scss";

const Map = ({
  places: { places },
  latLong,
  getLatLong,
  bounds,
  getBounds,
}) => {
  const dispatch = useDispatch();

  // getting the user location coordinates
  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location)
          dispatch(
            getLatLong(location.coords.latitude, location.coords.longitude)
          );
      });
    }
  }, []);
  // console.log("latLong", latLong);

  // getting coordinates of two bounds of the map
  const handleChange = (e) => {
    getBounds(
      e.bounds.ne.lat,
      e.bounds.ne.lng,
      e.bounds.sw.lat,
      e.bounds.sw.lng
    );
  };
  // console.log("bounds", bounds);

  return (
    <section className="places__map">
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={[latLong.latitude, latLong.longitude]}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // onChange={(e) => console.log(e)}
        onChange={handleChange}
      >
        {/* {places?.map((place) => (
          <PlaceOnMap
            key={place.id}
            place={place}
            lat={Number(place.position.lat)}
            lng={Number(place.position.lon)}
          />
        ))} */}

        <UserLocationOnMap lat={latLong.latitude} lng={latLong.longitude} />
      </GoogleMap>
    </section>
  );
};

Map.propTypes = {
  latLong: PropTypes.object.isRequired,
  getLatLong: PropTypes.func.isRequired,
  bounds: PropTypes.object.isRequired,
  getBounds: PropTypes.func.isRequired,
  places: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  latLong: state.latLong,
  bounds: state.bounds,
  places: state.places,
});

export default connect(mapStateToProps, { getLatLong, getBounds })(Map);
