import { useState } from "react";
import Header from "../../components/Header";
import PlaceTypes from "../../components/PlaceTypes";
import PlacesList from "../../components/PlacesList";
import Map from "../../components/Map";
import { useMediaQuery } from "@mui/material";
import "./Home.scss";

const Home = ({ places }) => {
  const [showMap, setShowMap] = useState(true);
  const desktop = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <Header showMap={showMap} setShowMap={setShowMap} desktop={desktop} />

      <div className="container">
        <PlaceTypes />

        <div className="places">
          {!desktop && showMap && <Map />}
          {/* {!desktop && showMap && <Map places={places} />} */}
          {!desktop && !showMap && <PlacesList />}
          {/* {!desktop && !showMap && <PlacesList places={places} />} */}

          {desktop && (
            <>
              <Map places={places} />
              <PlacesList places={places} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
