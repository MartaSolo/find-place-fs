import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./PlaceDetailsContact.scss";

const PlaceDetailsContact = ({
  place: {
    poi: { phone, url },
  },
}) => {
  return (
    <div className="place__contact">
      {phone && (
        <div className="place__contact--phone">
          <FontAwesomeIcon
            icon={faPhone}
            size="lg"
            className="place__contact--icon"
          />
          <div className="place__contact--number">
            <Typography variant="subtitle1">{phone}</Typography>
          </div>
        </div>
      )}
      {url && (
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="place__contact--website"
        >
          Website
        </a>
      )}
    </div>
  );
};

export default PlaceDetailsContact;
