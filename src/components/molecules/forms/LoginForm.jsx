import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AppButton } from "../../atoms/Buttons";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import AppInput from "../../atoms/Input";
import { primary } from "../../../app-theme/colors";
import { AppLabel } from "../../../app-theme";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../../utils/enums";
import AppDiv from "../../atoms/appDiv";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Container sx={containerStyle}>
        <AppDiv sx={maindiv}>
          <AppLabel>Email</AppLabel>
          <AppInput placeholder="Enter your email" fullWidth margin="normal" />
          <AppLabel>Password</AppLabel>
          <AppInput
            placeholder="Enter your password"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <AppButton
            variant="contained"
            fullWidth
            sx={{ marginTop: 1, height: "50px", backgroundColor: primary }}
          >
            Log in
          </AppButton>
          <Link to={ROUTE_PATH.FORGET_PASSWORD}>
            <AppLabel
              sx={{ color: primary, mt: 2, mb: 2, textAlign: "center", fontWeight: "bold" }}
            >
              Forget Password ?
            </AppLabel>
          </Link>
        </AppDiv>
        <AppDiv
          sx={{
            width: "330px",
            borderRadius: "10px",
          }}
        >
          <AppDiv sx={{ display: "flex", alignItems: "center", mt: 4 }}>
            <AppButton
              startIcon={<GoogleIcon />}
              variant="outlined"
              color="warning"
              fullWidth
              sx={{ btnStyle }}
            >
              Google
            </AppButton>
            <AppDiv sx={{ ml: 1 }} />
            <AppButton
              variant="outlined"
              color="warning"
              startIcon={<AppleIcon />}
              fullWidth
              sx={{ btnStyle }}
            >
              Apple ID
            </AppButton>
          </AppDiv>
          <AppDiv sx={{ mt: 2, display: "flex", justifyContent: "center", marginTop: 10 }}>
            <AppLabel> Don&apos;t have an account ? </AppLabel>{" "}
            <AppLabel style={{ color: primary }}> Sign up </AppLabel>{" "}
          </AppDiv>
        </AppDiv>
      </Container>
    </>
  );
};

export default LoginForm;

export const containerStyle = {
  height: "417px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  bottom: "200px",
};

export const maindiv = {
  width: "350px",
  p: 3,
  borderRadius: "10px",
  filter: "drop-shadow(0px 10px 40px rgba(0, 64, 128, 0.1))",
  background: "white",
};

const btnStyle = {
  marginTop: 1,
  height: "40px",
  backgroundColor: "white",
  color: primary,
};
