import { Avatar, ButtonGroup } from "@mui/material";
import AppDiv from "../../../../components/atoms/appDiv";
import { AppLabel } from "../../../../app-theme";
import { AppButton } from "../../../../components/atoms/Buttons";
import AppInput from "../../../../components/atoms/Input";
import { primary } from "../../../../app-theme/colors";

const MySetting = () => {
  return (
    <div>
      <AppDiv sx={{ display: "flex", alignItems: "stretch", flexDirection: "column" }}>
        <AppDiv sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <AppButton
              variant="contained"
              color="warning"
              size="large"
              sx={{ background: primary, width: "100px", height: "40px" }}
            >
              Profile
            </AppButton>
            <AppButton
              variant="contained"
              color="warning"
              size="large"
              sx={{ background: primary, width: "100px", height: "40px" }}
            >
              Emergency
            </AppButton>
            <AppButton
              variant="contained"
              color="warning"
              size="large"
              sx={{ background: primary, width: "100px", height: "40px" }}
            >
              Allergies
            </AppButton>
          </ButtonGroup>
        </AppDiv>
        <AppDiv sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src={"https://mui.com/static/images/avatar/1.jpg"}
            sx={{
              width: 150,
              height: 150,
              borderRadius: 4,
              boxShadow: "0 0 12.507644653320312px 0px rgba(0, 64, 128, 0.1)",
            }}
          />
        </AppDiv>
        <AppDiv sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 1 }}>
          <div style={{ width: "100%" }}>
            <AppLabel>Child Full Name</AppLabel>
            <AppInput placeholder="Child Full Name" fullWidth margin="normal" />
          </div>
          <div style={{ marginLeft: 10, width: "100%" }}>
            <AppLabel>Primary contact #</AppLabel>
            <AppInput placeholder="Primary contact #" type="password" fullWidth margin="normal" />
          </div>
        </AppDiv>
        <AppDiv sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 1 }}>
          <div style={{ width: "100%" }}>
            <AppLabel> Date of Birth</AppLabel>
            <AppInput placeholder="Date of Birth" fullWidth margin="normal" />
          </div>
          <div style={{ marginLeft: 10, width: "100%" }}>
            <AppLabel>Address</AppLabel>
            <AppInput placeholder="Address" fullWidth margin="normal" />
          </div>
        </AppDiv>
      </AppDiv>
    </div>
  );
};

export default MySetting;
