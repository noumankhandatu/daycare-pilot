import AppPaper from "../atoms/paper";
import Avatar from "@mui/material/Avatar";
import image from "../../assets/avatars/nas.webp";
import { AppLabel, Appcaption, Appheading } from "../../app-theme";

const MsgRecieverCard = () => {
  return (
    <AppPaper sx={{ display: "flex", alignItems: "center", p: 1 ,mt:1,mb:1 }}>
      <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
      <div style={{ flex: "1", marginLeft: "8px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <Appheading>Teacher</Appheading>
            <AppLabel>Thank you so much!</AppLabel>
          </div>
          <Appcaption sx={{ position: "absolute", bottom: 0, right: 1 }}>09:40</Appcaption>
        </div>
      </div>
    </AppPaper>
  );
};

export default MsgRecieverCard;
