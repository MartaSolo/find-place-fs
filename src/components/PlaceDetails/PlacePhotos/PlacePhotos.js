import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlacePhotos } from "../../../actions/placePhotosActions";
import Loader from "../../Loader";
import PlacePhoto from "./PlacePhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./PlacePhotos.scss";

const PlacePhotos = ({ id, placePhotos: { photos }, getPlacePhotos }) => {
  useEffect(() => {
    getPlacePhotos(id);
  }, [id]);

  console.log("photos", photos);

  return (
    <div className="place__tips">
      <h6 className="place__tips-title">
        <FontAwesomeIcon
          icon={faComments}
          size="xl"
          className="place__tips-icon"
        />
        Place photos
      </h6>
      {!photos && <Loader />}
      {photos &&
        photos.map((photo) => {
          return (
            <div key={photo.id}>
              <PlacePhoto url={`${photo.prefix}original${photo.suffix}`} />
            </div>
          );
        })}
    </div>
  );
};

PlacePhotos.propTypes = {
  placePhotos: PropTypes.object.isRequired,
  getPlacePhotos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  placePhotos: state.placePhotos,
});

export default connect(mapStateToProps, { getPlacePhotos })(PlacePhotos);
