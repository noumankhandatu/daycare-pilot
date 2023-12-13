import AlertCard from "../../../components/molecules/AlertCard";
import AppPaper from "../../../components/atoms/paper";
import { AppButton } from "../../../components/atoms/Buttons";
import AppDiv from "../../../components/atoms/appDiv";
import AddIcon from "@mui/icons-material/Add";

const AlertTab = () => {
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
        <AlertCard />
      </AppPaper>
    </>
  );
};

export default AlertTab;
