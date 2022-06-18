import Loader from "../../../Loader";

const PlacePhoto = ({ url }) => {
  return (
    <div>
      <p> Place photo</p>
      {!url && <Loader />}
      {url && <img src={url}></img>}
    </div>
  );
};

export default PlacePhoto;
