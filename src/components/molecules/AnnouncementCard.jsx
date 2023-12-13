import AppPaper from "./../atoms/paper";
import { Appcaption, Appheading } from "../../app-theme";
import DeleteIcon from "@mui/icons-material/Delete";
import AppIcons from "../atoms/Icon";
import AppDiv from "../atoms/appDiv";
import EditIcon from "@mui/icons-material/Edit";
import { primary } from "../../app-theme/colors";

const AnnouncementCard = () => {
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
          <Appheading>
            Please check your Kid’s bagpack for any electronic items.. Electronic items are not
            allowed as per the daycare policy
          </Appheading>
          <AppDiv sx={{ display: "flex", mt: 2 }}>
            <Appcaption>13 Oct 2023</Appcaption>
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
    </div>
  );
};

export default AnnouncementCard;
const IconColors = {
  width: 39,
  height: 39,
  borderRadius: "10.61px",
  padding: 0.5,
  color: "white",
};
