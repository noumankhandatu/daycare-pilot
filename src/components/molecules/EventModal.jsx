import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppDiv from "../atoms/appDiv";
import { AppButton } from "../atoms/Buttons";
import AddIcon from "@mui/icons-material/Add";
import { AppLabel, AppMainheading } from "../../app-theme";
import Calendar from "./Calender";
import AppInput from "../atoms/Input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "16px",
};

export default function EventModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <AppMainheading sx={{ textAlign: "center", mb: 4 }}>Add Holiday</AppMainheading>
          <Calendar show={false} />
          <Box>
            {/* <AppLabel>Email</AppLabel>
            <AppInput placeholder="Enter your email" fullWidth margin="normal" /> */}
            <AppLabel>Title</AppLabel>
            <AppInput placeholder="Enter your Title" fullWidth margin="normal" />
            <AppLabel>Additional Details</AppLabel>
            <AppInput
              placeholder="Enter your Title"
              fullWidth
              margin="normal"
              sx={{ height: "70px" }}
            />
            <AppButton
              onClick={handleClose}
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
