import { Typography } from "@mui/material";
import "./PlaceExtendedPopHours.scss";

const PlaceExtendedPopHours = ({ popularHours }) => {
  const findDayOfWeek = (dayNumber) => {
    switch (dayNumber) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "";
    }
  };

  return (
    <div className="place__popularHours">
      <Typography variant="h6" gutterBottom>
        Popular hours:
      </Typography>

      {popularHours.map((day, index) => {
        return (
          <div key={index} className="place__popularHours--list">
            <div className="place__popularHours--day">
              {findDayOfWeek(day.dayOfWeek)}:
            </div>
            <div className="place__popularHours--hour">
              {day.timeRanges.map((range, index) => {
                return (
                  <div key={index}>
                    {range.startTime.hour}.{range.startTime.minute}0 -{" "}
                    {range.endTime.hour}.{range.endTime.minute}0
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaceExtendedPopHours;
