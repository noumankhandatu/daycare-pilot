import AppPaper from "./../atoms/paper";
import { AppMainheading } from "../../app-theme";
import { Appfont } from "./../../app-theme/index";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AppIcons from "../atoms/Icon";
import AppDiv from "../atoms/appDiv";
import { primary } from "../../app-theme/colors";

const EventsCard = () => {
  return (
    <div>
      <AppPaper
        sx={{
          boxShadow: "0 11.926605224609375px 47.7064208984375px 0px rgba(0, 64, 128, 0.1)",
          p: 2,
          display: {
            sm: "flex",
            xs: "block",
          },
          justifyContent: "space-between",
          borderBottomRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          mt: 3,
        }}
      >
        <div>
          <AppMainheading sx={{ fontSize: "21.47px", color: "#0EAD69", fontWeight: 500 }}>
            Closure - Stat History
          </AppMainheading>
          <AppDiv sx={{ display: "flex" }}>
            <CalendarMonthIcon sx={{ color: "#0EAD69" }} />
            <Appfont sx={{ fontSize: "15px", color: "#272755", fontWeight: 600, ml: 1 }}>
              SUN, 05 October 2023
            </Appfont>
          </AppDiv>
        </div>
        <AppDiv
          sx={{
            width: {
              lg: "300px",
              xs: "100%",
            },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <AppIcons
            platform="facebook"
            icon={<EditIcon sx={{ ...IconColors, backgroundColor: primary }} />}
          />
          <AppIcons
            platform="twitter"
            icon={<DeleteIcon sx={{ ...IconColors, backgroundColor: "red" }} />}
          />
        </AppDiv>
      </AppPaper>
      <AppDiv
        sx={{
          height: "16px",
          background: "#0EAD69",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      ></AppDiv>
    </div>
  );
};

export default EventsCard;
const IconColors = {
  width: 39,
  height: 39,
  borderRadius: "10.61px",
  padding: 0.5,
  color: "white",
};
