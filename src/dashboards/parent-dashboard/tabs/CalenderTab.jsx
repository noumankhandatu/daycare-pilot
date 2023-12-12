import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Unstable_Grid2";
import AppPaper from "../../../components/atoms/paper";
import EventsCard from "../../../components/molecules/EventsCard";
import Calendar from "../../../components/molecules/Calender";
import AppDiv from "../../../components/atoms/appDiv";
import { AppButton } from "./../../../components/atoms/Buttons";
import AddIcon from "@mui/icons-material/Add";

const CalenderTab = () => {
  const handleAdd = () => {
    alert("");
  };
  return (
    <>
      <AppDiv sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mb: 4 }}>
        <AppButton
          onClick={handleAdd}
          color="warning"
          variant="contained"
          sx={{ width: "152px", height: "42px" }}
          startIcon={<AddIcon />}
        >
          Add
        </AppButton>
      </AppDiv>
      <Grid container spacing={2}>
        <Grid xs={7}>
          <AppPaper
            sx={{
              flex: 1,
              padding: 2,
            }}
          >
            <FormGroup sx={{ display: "flex" }}>
              <Grid container spacing={2}>
                <Grid xs={3}>
                  <FormControlLabel control={<Checkbox color="warning" />} label="All" />
                </Grid>
                <Grid xs={3}>
                  <FormControlLabel control={<Checkbox color="warning" />} label="Holidays" />{" "}
                </Grid>
                <Grid xs={3}>
                  <FormControlLabel control={<Checkbox color="warning" />} label="Events" />
                </Grid>
                <Grid xs={3}>
                  <FormControlLabel control={<Checkbox color="warning" />} label="Kids" />
                </Grid>
              </Grid>
            </FormGroup>

            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </AppPaper>
        </Grid>
        <Grid xs={4}>
          <Calendar />
        </Grid>
      </Grid>
    </>
  );
};

export default CalenderTab;
