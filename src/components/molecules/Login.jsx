import { useState } from "react";
import { Box, Container, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AppButton } from "../atoms/Buttons";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import AppInput from "../atoms/Input";
import { AppLabel } from "../../Apptheme";
import { primary } from "../../Apptheme/colors";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container sx={containerStyle}>
      <Box sx={maindiv}>
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
        <AppLabel sx={{ color: primary, mt: 2, mb: 2, textAlign: "center", fontWeight: "bold" }}>
          Forget Password ?
        </AppLabel>
      </Box>
      <Box
        sx={{
          width: "330px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
          <AppButton
            startIcon={<GoogleIcon />}
            variant="outlined"
            color="warning"
            fullWidth
            sx={{ btnStyle }}
          >
            Google
          </AppButton>
          <Box sx={{ ml: 1 }} />
          <AppButton
            variant="outlined"
            color="warning"
            startIcon={<AppleIcon />}
            fullWidth
            sx={{ btnStyle }}
          >
            Apple ID
          </AppButton>
        </Box>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", marginTop: 10 }}>
          <AppLabel> Don&apos;t have an account ? </AppLabel>{" "}
          <AppLabel style={{ color: primary }}> Sign up </AppLabel>{" "}
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;

const containerStyle = {
  height: "417px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  bottom: "200px",
};

const maindiv = {
  width: "330px",
  p: 3,
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  background: "white",
};
const btnStyle = {
  marginTop: 1,
  height: "40px",
  backgroundColor: "white",
  color: primary,
};
