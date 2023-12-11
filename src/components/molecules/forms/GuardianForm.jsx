import { Box, Container } from "@mui/material";
import { AppButton } from "../../atoms/Buttons";
import AppInput from "../../atoms/Input";
import { primary } from "../../../app-theme/colors";
import { AppLabel, Appfont, Appheading } from "../../../app-theme";
import { containerStyle, maindiv } from "./LoginForm";
import { ROUTE_PATH } from "../../../utils/enums";
import { Link } from "react-router-dom";

const GuardianForm = () => {
  return (
    <Container sx={containerStyle}>
      <Box sx={maindiv}>
        <Appheading sx={{ textAlign: "center", fontWeight: "bolder" }}>
          Enter Guardians Info
        </Appheading>
        <Appfont sx={{ textAlign: "center", mt: 2 }}>Please enter your kid information</Appfont>

        <AppLabel sx={{ mt: 3 }}>Guardian Name 1 </AppLabel>
        <AppInput fullWidth margin="normal" />
        <AppLabel sx={{ mt: 3 }}>Guardian Name 2 </AppLabel>
        <AppInput fullWidth margin="normal" />

        <Link to={ROUTE_PATH.PARENT_DASHBOARD}>
          <AppButton
            variant="contained"
            fullWidth
            sx={{ marginTop: 2, height: "50px", backgroundColor: primary }}
          >
            Next
          </AppButton>
        </Link>
      </Box>
    </Container>
  );
};

export default GuardianForm;
