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
import { Box } from "@mui/system";
import { navItems } from "../../data";
import AppIcons from "../atoms/Icon";
import { Appfont } from "../../Apptheme/index";
import { primary } from "../../Apptheme/colors";
import AppImage from "../atoms/Image";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <Box>
      {isMobile ? (
        <Box
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
            <Box sx={{ width: "250px", padding: "16px", background: primary, height: "100vh" }}>
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
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Box style={{ display: "flex", justifyContent: "center", backgroundColor: primary }}>
          <Box sx={mainDivStyle}>
            {/* Left side items */}
            <Box sx={{ display: "flex", width: "310px" }}>
              {navItems?.map((items, id) => {
                return (
                  <Appfont sx={{ ml: 2, cursor: "pointer" }} key={id}>
                    {items}
                  </Appfont>
                );
              })}
            </Box>

            {/* Center image */}
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center", position: "relative" }}
            >
              <Paper sx={imagePositionStyle}>
                <AppImage src={logo} alt="Logo" />
              </Paper>
            </Box>

            {/* Right side icons */}
            <Box sx={{ width: "300px", display: "flex", justifyContent: "flex-end" }}>
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
            </Box>
          </Box>
        </Box>
      )}
    </Box>
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
