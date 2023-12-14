/* eslint-disable react/jsx-key */
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Unstable_Grid2";
import AppPaper from "../../../components/atoms/paper";
import EventsCard from "../../../components/molecules/EventsCard";
import Calendar from "../../../components/molecules/Calender";
import EventModal from "../../../components/molecules/EventModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Appheading } from "../../../app-theme";

const CalenderTab = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [currentDate, setcurrentDate] = useState();
  const date = useSelector((state) => state?.itemsSlice?.items);

  return (
    <>
      <EventModal
        setDescription={setDescription}
        setTitle={setTitle}
        setcurrentDate={setcurrentDate}
        currentDate={currentDate}
        description={description}
        title={title}
      />
      <Grid container spacing={2}>
        <Grid xs={12} lg={8}>
          <AppPaper
            sx={{
              flex: 1,
              padding: 2,
            }}
          >
            <FormGroup sx={{ display: "flex" }}>
              <Grid container spacing={2} justifyContent={"center"}>
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
            {date.length > 0 ? (
              <>
                {date &&
                  date?.map((items, index) => {
                    return <EventsCard {...items} key={index} id={index} />;
                  })}
              </>
            ) : (
              <Appheading sx={{ mt: 3 }}>Lets add a new event no events added</Appheading>
            )}
          </AppPaper>
        </Grid>
        <Grid xs={12} lg={4}>
          <Calendar setcurrentDate={setcurrentDate} />
        </Grid>
      </Grid>
    </>
  );
};

export default CalenderTab;
