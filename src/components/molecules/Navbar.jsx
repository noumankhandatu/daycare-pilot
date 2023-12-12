import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../../assets/images/logo.png";
import AppIcons from "../atoms/Icon";
import AppImage from "../atoms/Image";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Appheading } from "../../app-theme";
import { navItems } from "../../utils/static-data";
import { primary } from "../../app-theme/colors";
import AppDiv from "../atoms/appDiv";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <AppDiv>
      {isMobile ? (
        <AppDiv
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: primary,
          }}
        >
          <AppImage
            src={logo}
            alt="Logo"
            sx={{
              width: "100px",
              ml: 4,
              mt: 2,
              filter:
                "brightness(0) saturate(100%) invert(14%) sepia(6%) saturate(5383%) hue-rotate(184deg) brightness(94%) contrast(85%)",
            }}
          />
          <MenuIcon sx={{ mr: 4, color: "white" }} onClick={handleSidebarToggle} />
          {/* Add Drawer for the sidebar */}
          <Drawer anchor="right" open={isSidebarOpen} onClose={handleSidebarToggle}>
            {/* Content of the sidebar */}
            <AppDiv sx={{ width: "250px", padding: "16px", background: primary, height: "100vh" }}>
              {navItems.map((text, index) => (
                <ListItem id={index} key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <KeyboardArrowRightIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ color: "white" }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </AppDiv>
          </Drawer>
        </AppDiv>
      ) : (
        <AppDiv style={{ display: "flex", justifyContent: "center", backgroundColor: primary }}>
          <AppDiv sx={mainDivStyle}>
            {/* Left side items */}
            <AppDiv sx={{ display: "flex", width: "310px" }}>
              {navItems?.map((items, id) => {
                return (
                  <Appheading sx={{ ml: 2, cursor: "pointer" }} key={id}>
                    {items}
                  </Appheading>
                );
              })}
            </AppDiv>

            {/* Center image */}
            <AppDiv
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center", position: "relative" }}
            >
              <Paper sx={imagePositionStyle}>
                <AppImage src={logo} alt="Logo" />
              </Paper>
            </AppDiv>

            {/* Right side icons */}
            <AppDiv sx={{ width: "300px", display: "flex", justifyContent: "flex-end" }}>
              <AppIcons
                platform="facebook"
                icon={<InstagramIcon sx={{ ...IconColors, backgroundColor: "#F85F89" }} />}
              />
              <AppIcons
                platform="twitter"
                icon={<TwitterIcon sx={{ ...IconColors, backgroundColor: "#55ACEE" }} />}
              />

              <AppIcons
                platform="instagram"
                icon={<FacebookIcon sx={{ ...IconColors, backgroundColor: "#3B5998" }} />}
              />
            </AppDiv>
          </AppDiv>
        </AppDiv>
      )}
    </AppDiv>
  );
};

export default Navbar;

const mainDivStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%",
  position: "relative",
  top: 70,
  backgroundColor: "white",
  borderRadius: "11.19px",
  height: "70px",
};

const imagePositionStyle = {
  p: 2,
  width: "255px",
  height: "194px",
  borderRadius: "34px",
  position: "absolute",
  top: "-74px",
};

const IconColors = {
  width: 39,
  height: 39,
  borderRadius: "19.61px",
  padding: 1.5,
  color: "white",
};
