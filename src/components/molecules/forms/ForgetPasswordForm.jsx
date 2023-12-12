import Container from "@mui/material/Container";
import { AppButton } from "../../atoms/Buttons";
import AppInput from "../../atoms/Input";
import { primary } from "../../../app-theme/colors";
import { AppLabel, Appfont, Appheading } from "../../../app-theme";
import { Link } from "react-router-dom";
import { containerStyle, maindiv } from "./LoginForm";
import { ROUTE_PATH } from "../../../utils/enums";
import AppDiv from "../../atoms/appDiv";

const ForgetPasswordForm = () => {
  return (
    <Container sx={containerStyle}>
      <AppDiv sx={maindiv}>
        <Appheading sx={{ textAlign: "center", fontWeight: "bolder" }}>Forget Password</Appheading>
        <Appfont sx={{ textAlign: "center", mt: 2 }}>
          Please enter your email below to receive your password reset instructions.
        </Appfont>

        <AppLabel sx={{ mt: 3 }}>Email </AppLabel>
        <AppInput placeholder="Enter your email" fullWidth margin="normal" />
        <Link to={ROUTE_PATH.RECOVERY_PASSWORD}>
          <AppButton
            variant="contained"
            fullWidth
            sx={{ marginTop: 2, height: "50px", backgroundColor: primary }}
          >
            Next
          </AppButton>
        </Link>
      </AppDiv>
      <AppDiv sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
        <Link to="/login">
          <AppLabel>Go Back </AppLabel>
        </Link>
      </AppDiv>
    </Container>
  );
};

export default ForgetPasswordForm;
