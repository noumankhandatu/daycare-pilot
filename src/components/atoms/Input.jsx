import { styled } from "@mui/system";
import { TextField } from "@mui/material";

const AppInput = styled(TextField)({
  width: "100%",
  borderRadius: "10px",
  backgroundColor: "#F0F0F0",
  fontFamily: "Plus Jakarta Sans",
  fontWeight: 600,
  fontSize: "15.91px",
  lineHeight: "26.87px",
  "&:focus": {
    outline: "none",
    boxShadow: `0 0 0 2px transparent !important`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export default AppInput;
