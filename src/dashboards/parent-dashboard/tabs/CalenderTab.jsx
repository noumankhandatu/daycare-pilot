import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AppPaper from "../../../components/atoms/paper";
// import EventsCard from "../../../components/molecules/EventsCard";

const CalenderTab = () => {
  return (
    <>
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

        {/* <EventsCard /> */}
      </AppPaper>
    </>
  );
};

export default CalenderTab;
