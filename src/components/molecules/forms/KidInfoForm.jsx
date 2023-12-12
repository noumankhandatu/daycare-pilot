import Container from "@mui/material/Container";
import { AppButton } from "../../atoms/Buttons";
import AppInput from "../../atoms/Input";
import { primary } from "../../../app-theme/colors";
import { AppLabel, Appfont, Appheading } from "../../../app-theme";
import { Link } from "react-router-dom";
import { containerStyle, maindiv } from "./LoginForm";
import { ROUTE_PATH } from "../../../utils/enums";
import imagePlus from "../../../assets/images/image-plus.png";
import AppImage from "../../atoms/Image";
import AppDiv from "../../atoms/appDiv";

const KidInfoForm = () => {
  return (
    <Container sx={containerStyle}>
      <AppDiv sx={maindiv}>
        <Appheading sx={{ textAlign: "center", fontWeight: "bolder", fontSize: 24 }}>
          Welcome to TinyTots daycare
        </Appheading>
        <Appfont sx={{ textAlign: "center", mt: 2 }}>Please enter your kid information</Appfont>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <AppDiv sx={imageBoxStyle}>
            <AppImage src={imagePlus} alt="ímg" sx={{ width: "50px", height: "50px" }} />
          </AppDiv>
        </div>
        <AppLabel sx={{ mt: 3 }}>Email </AppLabel>
        <AppInput fullWidth margin="normal" />
        <AppLabel sx={{ mt: 3 }}>Contact # </AppLabel>
        <AppInput fullWidth margin="normal" />
        <AppLabel sx={{ mt: 3 }}>Address </AppLabel>
        <AppInput fullWidth margin="normal" />
        <Link to={ROUTE_PATH.GUARDIAN_INFORMATION}>
          <AppButton
            variant="contained"
            fullWidth
            sx={{ marginTop: 2, height: "50px", backgroundColor: primary }}
          >
            Next
          </AppButton>
        </Link>
      </AppDiv>
    </Container>
  );
};

export default KidInfoForm;

const imageBoxStyle = {
  borderRadius: "100%",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 10px 40px 0 rgba(0, 64, 128, 0.1)",
  width: "120px",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mt: 4,
};
