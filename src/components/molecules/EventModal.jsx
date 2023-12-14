/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppDiv from "../atoms/appDiv";
import { AppButton } from "../atoms/Buttons";
import AddIcon from "@mui/icons-material/Add";
import { AppMainheading } from "../../app-theme";
import Calendar from "./Calender";
import AppInput from "../atoms/Input";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slice/calenderSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    lg: 500,
    xs: 350,
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "16px",
  height: 500,
  overflow: "auto",
};

// eslint-disable-next-line react/prop-types
export default function EventModal({
  setDescription,
  setTitle,
  setcurrentDate,
  currentDate,
  description,
  title,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleAdded = () => {
    setOpen(false);

    if (!description || !title || !currentDate) {
      alert("Please enter all fields");
      return;
    }
    dispatch(addItem({ title, description, currentDate }));
  };
  return (
    <div>
      <AppDiv sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mb: 4 }}>
        <AppButton
          onClick={handleOpen}
          color="warning"
          variant="contained"
          sx={{ width: "152px", height: "42px" }}
          startIcon={<AddIcon />}
        >
          Add
        </AppButton>
      </AppDiv>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AppMainheading sx={{ textAlign: "center", mb: 1 }}>Add Holiday</AppMainheading>
          <Calendar setcurrentDate={setcurrentDate} show={false} />
          <Box>
            <AppInput
              placeholder="Selected Date"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
              value={currentDate}
            />
            <AppInput
              placeholder="Enter your Title"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <AppInput
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your Description"
              fullWidth
            />
            <AppButton
              onClick={handleAdded}
              variant={"contained"}
              color="warning"
              height="300px"
              sx={{ background: "#FBB821", height: 40, width: "100%", mt: 2 }}
            >
              Added
            </AppButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
