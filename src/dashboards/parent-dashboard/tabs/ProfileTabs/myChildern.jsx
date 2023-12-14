import Avatar from "@mui/material/Avatar";
import AppPaper from "../../../../components/atoms/paper";
import { Appcaption, Appheading } from "../../../../app-theme";
import AppDiv from "../../../../components/atoms/appDiv";
import { AppButton } from "../../../../components/atoms/Buttons";
import AddIcon from "@mui/icons-material/Add";

const MyChildern = () => {
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
      <AppDiv
        sx={{
          display: {
            lg: "flex",
            xs: "block",
          },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <AppPaper sx={{ display: "flex", alignItems: "start", p: 1, mt: 1, mb: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src={
              "data:image/jpeg;base64,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"
            }
          />
          <div style={{ flex: "1", marginLeft: "8px", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <div>
                <Appheading>John</Appheading>
                <Appcaption>Didnt like pasta too much in Lunch. Snacks were good</Appcaption>
                <Appcaption>09:40</Appcaption>
              </div>
            </div>
          </div>
        </AppPaper>
        <AppPaper sx={{ display: "flex", alignItems: "start", p: 1, mt: 1, mb: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src={
              "data:image/jpeg;base64,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"
            }
          />
          <div style={{ flex: "1", marginLeft: "8px", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <div>
                <Appheading>John</Appheading>
                <Appcaption>Didnt like pasta too much in Lunch. Snacks were good</Appcaption>
                <Appcaption>09:40</Appcaption>
              </div>
            </div>
          </div>
        </AppPaper>
      </AppDiv>
    </>
  );
};

export default MyChildern;
