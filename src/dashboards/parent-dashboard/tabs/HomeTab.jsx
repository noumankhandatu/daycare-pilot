import { Avatar, Card, CardMedia, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import kidImg from "../../../assets/images/kid.png";
import { Appfont } from "../../../app-theme";
import { Appcaption } from "./../../../app-theme/index";
const HomeTab = () => {
  const userList = [{ imageUrl: kidImg, name: "nouman" }];
  return (
    <>
      {userList?.map((user, index) => (
        <Card
          key={index}
          sx={{
            mb: 2,
            p: 2,
            borderRadius: 6,
            boxShadow: "0 0 12.507644653320312px 0px rgba(0, 64, 128, 0.1)",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={"https://mui.com/static/images/avatar/1.jpg"}
              sx={{
                width: 56,
                height: 56,
                borderRadius: 4,
                boxShadow: "0 0 12.507644653320312px 0px rgba(0, 64, 128, 0.1)",
              }}
            />
            <Box sx={{ ml: 1 }}>
              <Appfont sx={{ color: "black" }}>Edith Johnson</Appfont>
            </Box>
          </Box>
          <Appcaption sx={{ mb: 1.5, mt: 2 }}>
            @emma Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </Appcaption>
          <CardMedia component="img" height="140" image={user.imageUrl} alt={user.name} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <FavoriteIcon /> 118
            </IconButton>
            <IconButton sx={{ marginLeft: "auto" }}>
              <ShareIcon />
            </IconButton>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default HomeTab;
