import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlaceTips } from "../../../actions/placeTipsActions";
import "./PlaceTips.scss";

const PlaceTips = ({ id, placeTips, getPlaceTips }) => {
  useEffect(() => {
    getPlaceTips(id);
  }, [id]);
  console.log("placeTips", placeTips);

  return (
    <div>
      <></>
    </div>
  );
};

PlaceTips.propTypes = {
  placeTips: PropTypes.object.isRequired,
  getPlaceTips: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  placeTips: state.placeTips,
});

export default connect(mapStateToProps, { getPlaceTips })(PlaceTips);
