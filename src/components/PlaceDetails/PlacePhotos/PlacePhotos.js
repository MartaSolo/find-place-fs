import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlacePhotos } from "../../../actions/placePhotosActions";
import Loader from "../../Loader";
import PlacePhoto from "./PlacePhoto";
import PhotoSliderBtn from "./PhotoSliderBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import "./PlacePhotos.scss";

const PlacePhotos = ({ id, name, placePhotos: { photos }, getPlacePhotos }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    getPlacePhotos(id);
  }, [id]);

  const nextSlide = () => {
    if (slideIndex !== photos.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(photos.length);
    }
  };

  if (photos) {
    return (
      <div className="place__photos">
        <h6 className="place__photos--title">
          <FontAwesomeIcon
            icon={faImages}
            size="xl"
            className="place__photos--icon"
          />
          Photos
        </h6>
        {photos &&
          photos.map((photo, index) => {
            return (
              <div
                key={photo.id}
                className={
                  slideIndex === index + 1
                    ? "place__photos--gallery active"
                    : "place__photos--gallery"
                }
              >
                <PlacePhoto
                  alt={name}
                  url={`${photo.prefix}800x600${photo.suffix}`}
                />
              </div>
            );
          })}
        <PhotoSliderBtn direction="next" moveSlide={nextSlide} />
        <PhotoSliderBtn direction="prev" moveSlide={prevSlide} />
      </div>
    );
  } else {
    return null;
  }
};

PlacePhotos.propTypes = {
  placePhotos: PropTypes.object.isRequired,
  getPlacePhotos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  placePhotos: state.placePhotos,
});

export default connect(mapStateToProps, { getPlacePhotos })(PlacePhotos);
