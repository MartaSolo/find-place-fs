import GoogleMap from "google-map-react";
import PlaceDetailsLocationOnMap from "../PlaceDetailsLocationOnMap";
import "./PlaceDetailsMap.scss";

const PlaceDetailsMap = ({
  place: {
    geocodes: {
      main: { latitude, longitude },
    },
  },
}) => {
  return (
    <>
      <div className="place__loaction--map">
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={[latitude, longitude]}
          center={[latitude, longitude]}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
        >
          <PlaceDetailsLocationOnMap />
        </GoogleMap>
      </div>
    </>
  );
};

export default PlaceDetailsMap;
