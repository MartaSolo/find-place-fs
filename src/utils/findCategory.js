const findCategory = (type) => {
  switch (type) {
    case "museum":
      return "10027,10028,10029,10030,10031";
    case "theatre":
      return "10036,10043";
    case "cinema":
      return "10024,10025,10026";
    case "restaurant":
      return "13065";
    case "cafe":
      return "13032";
    case "bar":
      return "13003";
    case "landmarks and outdoors":
      return "16000";
    case "sport and recreation":
      return "18000";
    default:
      return "";
  }
};

export default findCategory;
