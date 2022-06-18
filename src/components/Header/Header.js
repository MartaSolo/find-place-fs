import { Typography } from "@mui/material";
import "./Header.scss";

const Header = ({ showMap, setShowMap, desktop }) => {
  const handleToggle = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <header className="header">
      <Typography variant="h1" sx={{ fontSize: "2rem", pr: "0.5rem" }}>
        Find a place near you
      </Typography>

      {!desktop && (
        <button type="button" className="btn__toggle" onClick={handleToggle}>
          {showMap ? "List" : "Map"}
        </button>
      )}
    </header>
  );
};

export default Header;
