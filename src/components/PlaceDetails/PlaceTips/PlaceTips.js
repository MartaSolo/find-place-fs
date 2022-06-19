import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlaceTips } from "../../../actions/placeTipsActions";
import getFullDate from "../../../utils/getFullDate";
import Loader from "../../Loader";
import { CardContent, Typography, Card } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./PlaceTips.scss";

const PlaceTips = ({ id, placeTips: { tips }, getPlaceTips }) => {
  useEffect(() => {
    getPlaceTips(id);
  }, [id]);

  if (!tips) {
    return <Loader />;
  }

  if (tips.length > 0) {
    return (
      <div className="place__tips">
        <h6 className="place__tips--title">
          <FontAwesomeIcon
            icon={faComments}
            size="xl"
            className="place__tips--icon"
          />
          Visitors Tips
        </h6>
        {tips.map((tip) => {
          return (
            <div key={tip.id} className="place__tips-tip">
              <Card variant="outlined" sx={{ mb: "0.5rem" }}>
                <CardContent variant="outlined">
                  <Typography variant="subtitle2" color="info.main">
                    {getFullDate(tip.created_at)}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary">
                    {tip.text}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

PlaceTips.propTypes = {
  placeTips: PropTypes.object.isRequired,
  getPlaceTips: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  placeTips: state.placeTips,
});

export default connect(mapStateToProps, { getPlaceTips })(PlaceTips);
