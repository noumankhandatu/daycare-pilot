import Container from "@mui/material/Container";
import { AppButton } from "../../atoms/Buttons";
import { primary } from "../../../app-theme/colors";
import { AppLabel, Appheading } from "../../../app-theme";
import { Link } from "react-router-dom";
import { containerStyle, maindiv } from "./LoginForm";
import { ROUTE_PATH } from "../../../utils/enums";
import successImg from "../../../assets/images/success.png";
import AppImage from "./../../atoms/Image";
import AppDiv from "../../atoms/appDiv";

const LoginSuccessfullForm = () => {
  return (
    <Container sx={containerStyle}>
      <AppDiv sx={maindiv}>
        <div style={{ textAlign: "center" }}>
          <AppImage
            src={successImg}
            alt="success"
            sx={{ height: "160px", width: "160px", mb: 3 }}
          />
        </div>
        <Appheading sx={{ textAlign: "center", fontSize: "24px" }}>Congrats!</Appheading>
        <AppLabel sx={{ textAlign: "center", mt: 2 }}>
          You have successfully change password. Please use the new password when logging in.
        </AppLabel>

        <Link to={ROUTE_PATH.KID_INFORMATION}>
          <AppButton
            variant="contained"
            fullWidth
            sx={{ marginTop: 2, height: "50px", backgroundColor: primary }}
          >
            Login
          </AppButton>
        </Link>
      </AppDiv>
    </Container>
  );
};

export default LoginSuccessfullForm;
