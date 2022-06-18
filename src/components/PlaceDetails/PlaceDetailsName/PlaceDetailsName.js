import { Chip, Typography } from "@mui/material";
import "./PlaceDetailsName.scss";

const PlaceDetailsName = ({ place: { name, categories } }) => {
  return (
    <>
      <Typography variant="h5" sx={{ pl: 2, pb: 1 }}>
        {name}
      </Typography>

      <div className="place__categories">
        {categories.map((category, index) => {
          return (
            <Chip
              key={index}
              label={category.name}
              color="info"
              sx={{
                mr: 1,
                mb: 2,
              }}
            ></Chip>
          );
        })}
      </div>
    </>
  );
};

export default PlaceDetailsName;
