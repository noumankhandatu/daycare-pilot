import AppPaper from "../../../components/atoms/paper";
import { AppButton } from "../../../components/atoms/Buttons";
import AppDiv from "../../../components/atoms/appDiv";
import AddIcon from "@mui/icons-material/Add";
import AnnouncementCard from "../../../components/molecules/AnnouncementCard";

const AnnouncementsTab = () => {
  return (
    <>
      <AppDiv sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mb: 4 }}>
        <AppButton
          color="warning"
          variant="contained"
          sx={{ width: "152px", height: "42px" }}
          startIcon={<AddIcon />}
        >
          Add
        </AppButton>
      </AppDiv>
      <AppPaper sx={{ p: 2 }}>
        <AnnouncementCard />
      </AppPaper>
    </>
  );
};

export default AnnouncementsTab;
