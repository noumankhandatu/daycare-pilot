import { styled } from "@mui/system";
import { TextField } from "@mui/material";

const AppInput = styled(TextField)({
  width: "287px",
  borderRadius: "10px",
  backgroundColor: "#F0F0F0",
  fontFamily: "Plus Jakarta Sans",
  fontWeight: 600,
  fontSize: "15.91px",
  lineHeight: "26.87px",
  border: "none !important", // Remove the border
  "&:focus": {
    outline: "none",
    border: "none !important",
    boxShadow: `0 0 0 2px transparent !important`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export default AppInput;
