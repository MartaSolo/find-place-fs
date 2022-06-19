import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/places/:name" element={<PlaceDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
