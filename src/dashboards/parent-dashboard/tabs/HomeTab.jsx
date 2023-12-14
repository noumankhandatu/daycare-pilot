import { Avatar, Card, CardMedia, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import kidImg from "../../../assets/images/kid.png";
import { Appfont, Appheading } from "../../../app-theme";
import { Appcaption } from "./../../../app-theme/index";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Grid from "@mui/material/Unstable_Grid2";
import { alpha, primary } from "../../../app-theme/colors";
import { AppButton } from "../../../components/atoms/Buttons";
import AppDiv from "../../../components/atoms/appDiv";

const HomeTab = () => {
  const userList = [
    { imageUrl: kidImg, name: "nouman" },
    { imageUrl: kidImg, name: "nouman" },
    { imageUrl: kidImg, name: "nouman" },
  ];
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={7}>
        {userList?.map((user, index) => (
          <Card
            key={index}
            sx={{
              mb: 2,
              p: 2,
              borderRadius: 6,
              boxShadow: "0 0 12.507644653320312px 0px rgba(0, 64, 128, 0.1)",
              width: {
                md: "100%",
                xs: "96%",
              },
            }}
          >
            <AppDiv sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={"https://mui.com/static/images/avatar/1.jpg"}
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 4,
                  boxShadow: "0 0 12.507644653320312px 0px rgba(0, 64, 128, 0.1)",
                }}
              />
              <AppDiv sx={{ ml: 1 }}>
                <Appfont sx={{ color: "black" }}>Edith Johnson</Appfont>
              </AppDiv>
            </AppDiv>
            <Appcaption sx={{ mb: 1.5, mt: 2, color: "black" }}>
              @emma Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </Appcaption>
            <CardMedia component="img" height="256px" image={user.imageUrl} alt={user.name} />
            <AppDiv sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <Appfont>118</Appfont>
              <IconButton sx={{ marginLeft: "auto" }}>
                <ShareIcon />
              </IconButton>
            </AppDiv>
          </Card>
        ))}
      </Grid>
      <Grid xs={12} md={5}>
        <Card sx={cardCss}>
          <AppDiv sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Avatar
              src={"https://mui.com/static/images/avatar/1.jpg"}
              sx={{
                width: 106,
                height: 106,
                borderRadius: 9,
                boxShadow: "0 0 12.507644653320312px 0px rgba(0, 64, 128, 0.1)",
              }}
            />
            <AppDiv sx={{ ml: 1, mt: 1 }}>
              <Appheading sx={{ color: "black", textAlign: "center" }}>Edith Johnson</Appheading>
              <Appcaption sx={{ mb: 1.5, textAlign: "center" }}>@emma Lorem</Appcaption>
            </AppDiv>
            <AppDiv sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 1 }}>
              <AppButton variant="contained" fullWidth sx={btnStyle}>
                Vacations
              </AppButton>

              <AppButton
                sx={{ ...btnStyle, ml: 1, backgroundColor: primary }}
                variant="contained"
                fullWidth
              >
                Pick up
              </AppButton>
            </AppDiv>
          </AppDiv>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomeTab;

const btnStyle = {
  height: "42px",
  backgroundColor: alpha,
  width: "152px",
};

const cardCss = {
  mb: 2,
  p: 2,
  borderRadius: 6,
  boxShadow: "0 0 12.507644653320312px 0px rgba(0, 64, 128, 0.1)",
  width: {
    md: "100%",
    xs: "96%",
  },
};
