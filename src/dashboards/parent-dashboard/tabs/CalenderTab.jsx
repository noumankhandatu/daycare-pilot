import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Unstable_Grid2";
import AppPaper from "../../../components/atoms/paper";
import EventsCard from "../../../components/molecules/EventsCard";
import Calendar from "../../../components/molecules/Calender";
import EventModal from "../../../components/molecules/EventModal";

const CalenderTab = () => {
  return (
    <>
      <EventModal />
      <Grid container spacing={2}>
        <Grid xs={12} lg={8}>
          <AppPaper
            sx={{
              flex: 1,
              padding: 2,
            }}
          >
            <FormGroup sx={{ display: "flex" }}>
              <Grid container spacing={2} justifyContent={'center'}>
                <Grid md={3}>
                  <FormControlLabel control={<Checkbox color="warning" />} label="All" />
                </Grid>
                <Grid md={3}>
                  <FormControlLabel control={<Checkbox color="warning" />} label="Holidays" />{" "}
                </Grid>
                <Grid md={3}>
                  <FormControlLabel control={<Checkbox color="warning" />} label="Events" />
                </Grid>
                <Grid md={3}>
                  <FormControlLabel control={<Checkbox color="warning" />} label="Kids" />
                </Grid>
              </Grid>
            </FormGroup>

            <EventsCard />
          </AppPaper>
        </Grid>
        <Grid xs={12} lg={4}>
          <Calendar />
        </Grid>
      </Grid>
    </>
  );
};

export default CalenderTab;
