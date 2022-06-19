import Loader from "../../../Loader";
import "./PlacePhoto.scss";

const PlacePhoto = ({ alt, url }) => {
  return (
    <>
      {!url && <Loader />}
      {url && <img src={url} alt={alt} className="place__photos--photo" />}
    </>
  );
};

export default PlacePhoto;
