import AppPaper from "./../atoms/paper";
import { AppMainheading, Appcaption } from "../../app-theme";
import DeleteIcon from "@mui/icons-material/Delete";
import AppIcons from "../atoms/Icon";
import AppDiv from "../atoms/appDiv";
import { CheckBoxSharp } from "@mui/icons-material";

const AlertCard = () => {
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
          mt: 3,
        }}
      >
        <div>
          <AppMainheading sx={{ fontSize: "21.47px", color: "#0EAD69", fontWeight: 500 }}>
            Water issue at school
          </AppMainheading>
          <AppDiv sx={{ display: "flex", mt: 2 }}>
            <Appcaption>SUN, 05 October 2023</Appcaption>
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
            icon={<CheckBoxSharp sx={{ ...IconColors, backgroundColor: "#0EAD69" }} />}
          />
          <AppIcons
            platform="twitter"
            icon={<DeleteIcon sx={{ ...IconColors, backgroundColor: "red" }} />}
          />
        </AppDiv>
      </AppPaper>
    </div>
  );
};

export default AlertCard;
const IconColors = {
  width: 39,
  height: 39,
  borderRadius: "10.61px",
  padding: 0.5,
  color: "white",
};
