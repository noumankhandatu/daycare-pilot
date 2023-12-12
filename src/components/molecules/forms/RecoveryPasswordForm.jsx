/* eslint-disable react-hooks/rules-of-hooks */
import { AppButton } from "../../atoms/Buttons";
import AppInput from "../../atoms/Input";
import { primary } from "../../../app-theme/colors";
import { AppLabel, Appfont, Appheading } from "../../../app-theme";
import { useNavigate } from "react-router-dom";
import { containerStyle, maindiv } from "./LoginForm";
import { ROUTE_PATH } from "../../../utils/enums";
import { useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AppDiv from "../../atoms/appDiv";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";

const RecoveryPasswordForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [shakeInputs, setShakeInputs] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const otpInputs = Array.from({ length: 4 }, () => useRef(null));

  const handleOtpInputChange = (index) => (event) => {
    const value = event.target.value;
    if (value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  const handlePasswordChange = () => {
    if (password === confirmPassword) {
      // Passwords match, handle the change password logic
      setShakeInputs(true);
      setTimeout(() => {
        setShakeInputs(false);
        // Delayed navigation after 2 seconds
        setTimeout(() => {
          navigate(ROUTE_PATH.LOGIN_SUCCESSFULL);
        }, 2000);
      }, 500);
    } else {
      // Passwords don't match, you may want to handle this case
      setIsPasswordMatch(false);
    }
  };
  return (
    <Container sx={containerStyle}>
      <AppDiv sx={maindiv}>
        <Appheading sx={{ textAlign: "center", fontWeight: "bolder" }}>
          Recovery Password
        </Appheading>
        <Appfont sx={{ textAlign: "center", mt: 2, mb: 4 }}>
          Reset code was sent to your email. Please enter the code and create new password.
        </Appfont>
        {/* OTP Input Boxes */}
        <AppDiv display="flex" justifyContent="center" gap={2}>
          {otpInputs.map((inputRef, index) => (
            <AppInput
              className={shakeInputs ? "shake" : ""}
              key={index}
              variant="outlined"
              margin="normal"
              fullWidth
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center" },
              }}
              inputRef={inputRef}
              onChange={handleOtpInputChange(index)}
            />
          ))}
        </AppDiv>
        <AppLabel>Password</AppLabel>
        <AppInput
          placeholder="Enter your password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
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
        <AppDiv height="20px" />
        <AppLabel>Confirm Password</AppLabel>
        <AppInput
          placeholder="Enter your password"
          fullWidth
          margin="normal"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleConfirmPasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {!isPasswordMatch && (
          <AppDiv sx={{ color: "red", textAlign: "center", mt: 2 }}>Passwords do not match.</AppDiv>
        )}

        <AppButton
          onClick={handlePasswordChange}
          variant="contained"
          fullWidth
          sx={{ marginTop: 2, height: "50px", backgroundColor: primary }}
        >
          Change Password
        </AppButton>
      </AppDiv>
    </Container>
  );
};

export default RecoveryPasswordForm;
