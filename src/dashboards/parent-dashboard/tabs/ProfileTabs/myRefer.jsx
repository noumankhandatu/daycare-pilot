import { Appfont } from "../../../../app-theme";
import AppIcons from "../../../../components/atoms/Icon";
import AppDiv from "../../../../components/atoms/appDiv";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppPaper from "./../../../../components/atoms/paper";
import { AppButton } from "../../../../components/atoms/Buttons";

const MyRefer = () => {
  return (
    <AppDiv sx={{ textAlign: "center" }}>
      <AppPaper sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Appfont>link.com/refer/u25928</Appfont>
        <AppButton>Copied</AppButton>
      </AppPaper>
      <Appfont sx={{ mt: 2, mb: 2 }}>Share via</Appfont>
      <AppDiv sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <AppIcons
          platform="facebook"
          icon={<LinkedInIcon sx={{ ...footerIconStyle, color: "blue" }} />}
        />
        <AppIcons
          platform="twitter"
          icon={<TwitterIcon sx={{ ...footerIconStyle, color: "#3B5998" }} />}
        />
        <AppIcons
          platform="twitter"
          icon={<InstagramIcon sx={{ ...footerIconStyle, color: "#EF466F" }} />}
        />
        <AppIcons
          platform="instagram"
          icon={<FacebookIcon sx={{ ...footerIconStyle, color: "darkBlue" }} />}
        />
      </AppDiv>
      <Appfont>
        You will see a preview before anything is posted. Please only share the offer with friends
        you know would be happy to receive it.
      </Appfont>
    </AppDiv>
  );
};

export default MyRefer;
const footerIconStyle = {
  width: 29,
  height: 29,
  borderRadius: "19.61px",
  mr: 2,
};
