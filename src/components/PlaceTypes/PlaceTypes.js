import PlaceType from "./PlaceType";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setType } from "../../actions/typeActions";
import {
  faBuildingColumns,
  faMasksTheater,
  faFilm,
  faUtensils,
  faMugSaucer,
  faWineGlass,
  faMonument,
  faBasketball,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";
import "./PlaceTypes.scss";

const PlaceTypes = ({ type, setType }) => {
  const handleChange = (e) => {
    setType(e.target.value);
  };
  console.log("type", type);

  return (
    <div className="inputs">
      <Grid container>
        <Grid item xs={6} sm={3} className="radio">
          <PlaceType
            inputId="museum"
            inputValue="museum"
            onChange={handleChange}
            htmlFor="museum"
            labelClassName={
              type === "museum" ? "radio__label checked" : "radio__label"
            }
            icon={faBuildingColumns}
            label="Museum"
          />
        </Grid>

        <Grid item xs={6} sm={3} className="radio">
          <PlaceType
            inputId="theatre"
            inputValue="theatre"
            onChange={handleChange}
            htmlFor="theatre"
            labelClassName={
              type === "theatre" ? "radio__label checked" : "radio__label"
            }
            icon={faMasksTheater}
            label="Theatre"
          />
        </Grid>

        <Grid item xs={6} sm={3} className="radio">
          <PlaceType
            inputId="cinema"
            inputValue="cinema"
            onChange={handleChange}
            htmlFor="cinema"
            labelClassName={
              type === "cinema" ? "radio__label checked" : "radio__label"
            }
            icon={faFilm}
            label="Cinema"
          />
        </Grid>

        <Grid item xs={6} sm={3} className="radio">
          <PlaceType
            inputId="restaurant"
            inputValue="restaurant"
            onChange={handleChange}
            htmlFor="restaurant"
            labelClassName={
              type === "restaurant" ? "radio__label checked" : "radio__label"
            }
            icon={faUtensils}
            label="Restaurant"
          />
        </Grid>

        <Grid item xs={6} sm={3} className="radio">
          <PlaceType
            inputId="cafe"
            inputValue="cafe"
            onChange={handleChange}
            htmlFor="cafe"
            labelClassName={
              type === "cafe" ? "radio__label checked" : "radio__label"
            }
            icon={faMugSaucer}
            label="Cafe"
          />
        </Grid>

        <Grid item xs={6} sm={3} className="radio">
          <PlaceType
            inputId="bar"
            inputValue="bar"
            onChange={handleChange}
            htmlFor="bar"
            labelClassName={
              type === "bar" ? "radio__label checked" : "radio__label"
            }
            icon={faWineGlass}
            label="Bar"
          />
        </Grid>

        <Grid item xs={6} sm={3} className="radio">
          <PlaceType
            inputId="tourist attraction"
            inputValue="tourist attraction"
            onChange={handleChange}
            htmlFor="tourist attraction"
            labelClassName={
              type === "tourist attraction"
                ? "radio__label checked"
                : "radio__label"
            }
            icon={faMonument}
            label={`Tourist\nattraction`}
          />
        </Grid>

        <Grid item xs={6} sm={3} className="radio">
          <PlaceType
            inputId="sport facility"
            inputValue="sport facility"
            onChange={handleChange}
            htmlFor="sport facility"
            labelClassName={
              type === "sport facility"
                ? "radio__label checked"
                : "radio__label"
            }
            icon={faBasketball}
            label={`Sport\nfacility`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

PlaceTypes.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  type: state.type,
});

export default connect(mapStateToProp, { setType })(PlaceTypes);
