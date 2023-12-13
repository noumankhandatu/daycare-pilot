import { Avatar } from "@mui/material";
import AppDiv from "../../../../components/atoms/appDiv";
import { AppLabel } from "../../../../app-theme";
import { AppButton } from "../../../../components/atoms/Buttons";
import AppInput from "../../../../components/atoms/Input";
import { primary } from "../../../../app-theme/colors";

const MyProfile = () => {
  return (
    <div>
      <AppDiv sx={{ display: "flex", alignItems: "stretch", flexDirection: "column" }}>
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
            <AppLabel>Full Name</AppLabel>
            <AppInput placeholder="Enter your Title" fullWidth margin="normal" />
          </div>
          <div style={{ marginLeft: 10, width: "100%" }}>
            <AppLabel>Password</AppLabel>
            <AppInput placeholder="Enter your Password" type="password" fullWidth margin="normal" />
          </div>
        </AppDiv>
        <AppDiv sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 1 }}>
          <div style={{ width: "100%" }}>
            <AppLabel> Email</AppLabel>
            <AppInput placeholder="Enter your Email" fullWidth margin="normal" />
          </div>
          <div style={{ marginLeft: 10, width: "100%" }}>
            <AppLabel>Work Location</AppLabel>
            <AppInput placeholder="Enter your Work Location" fullWidth margin="normal" />
          </div>
        </AppDiv>
        <AppDiv sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 1 }}>
          <div style={{ width: "100%" }}>
            <AppLabel>Contact #</AppLabel>
            <AppInput placeholder="Enter your Contact #" fullWidth margin="normal" />
          </div>
          <div style={{ marginLeft: 10, width: "100%" }}>
            <AppButton
              variant="contained"
              color="warning"
              sx={{ mt: 4, height: 50, background: primary }}
              fullWidth
            >
              Save
            </AppButton>
          </div>
        </AppDiv>
      </AppDiv>
    </div>
  );
};

export default MyProfile;
