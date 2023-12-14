import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

// eslint-disable-next-line react/prop-types
const Calendar = ({ setcurrentDate, show = true }) => {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (newValue) => {
    setValue(newValue);
    setcurrentDate(newValue.toDateString());
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          slotProps={{
            calendarHeader: {
              sx: {
                display: show ? "relative" : "none",
                position: "relative",
                "& .MuiPickersArrowSwitcher-root": {
                  width: 0,
                },
                "& .MuiPickersCalendarHeader-labelContainer": {
                  margin: "auto",
                },
                "& .MuiIconButton-edgeEnd": {
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                },
                "& .MuiIconButton-edgeStart": {
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                },
              },
            },
            leftArrowIcon: {
              sx: { color: "#000", fontSize: "2rem" },
            },
            rightArrowIcon: {
              sx: { color: "#000", fontSize: "2rem" },
            },
          }}
          variant="static"
          orientation="portrait"
          value={value}
          disableFuture
          onChange={handleDateChange}
          sx={{
            width: "100%",
            height: "400px",
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default Calendar;
