const getFoursquare = (successCallback) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "fsq3HRtk2QF3p1YAtfdvyTyuVwCaUVkoReYzSKfrGH4u6To= ",
    },
  };

  fetch(
    "https://api.foursquare.com/v2/venues/search?query=museum&ll=41.8781%2C-87.6298",
    options
  )
    .then((response) => response.json())
    .then((data) => successCallback(data.result))
    .catch((err) => console.error(err));
};

export default getFoursquare;
