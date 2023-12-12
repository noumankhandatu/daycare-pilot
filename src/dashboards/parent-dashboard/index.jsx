import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Badge from "@mui/material/Badge";
import InputAdornment from "@mui/material/InputAdornment";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppImage from "../../components/atoms/Image";
import logo from "../../assets/images/logo.png";
import { alpha, primary } from "../../app-theme/colors";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import WarningIcon from "@mui/icons-material/Warning";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { listArray, listObj } from "./type";
import { AppMainheading, Appcaption } from "../../app-theme";
import AppInput from "./../../components/atoms/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeTab from "./tabs/HomeTab";
import CalenderTab from "./tabs/CalenderTab";
import ProfileMenu from "../../components/molecules/menu";
import AppDiv from "../../components/atoms/appDiv";
const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  border: "none",
  boxShadow: "2px 2px 2px 0px #efefef",
  zIndex: 9999,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const ListItemContainer = styled(ListItemButton)(({ theme, isSelected }) => ({
  height: 48,
  width: 160,
  justifyContent: open ? "initial" : "center",
  backgroundColor: isSelected ? primary : "transparent",
  "&:hover": {
    backgroundColor: isSelected ? primary : theme.palette.action.hover,
  },
  borderRadius: "10px",
  color: isSelected ? "white" : "black",
}));

export default function ParentDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedItem, setSelectedItem] = React.useState(listObj.HOME);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case listObj.HOME.toString():
        return <HomeTab />;
      case listObj.CALENDAR:
        return <CalenderTab />;
      case listObj.MESSAGE:
        return <Typography>Content for MESSAGE</Typography>;
      case listObj.ALERTS:
        return <Typography>Content for ALERTS</Typography>;
      case listObj.ANNOUNCMENT:
        return <Typography>Content for ANNOUNCEMENT</Typography>;
      case listObj.REPORT:
        return <Typography>Content for REPORT</Typography>;
      case listObj.PROFILE:
        return <Typography>Content for PROFILE</Typography>;
      default:
        return <Typography>Content not available</Typography>;
    }
  };
  //
  return (
    <AppDiv sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background: "white",
          height: 96,
          boxShadow: 0,
          p: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <AppDiv
            sx={{
              flexDirection: "column",
              display: {
                lg: "flex",
                xs: "none",
              },
            }}
          >
            <AppMainheading sx={{ color: "black" }}>Hi Cody Fisher</AppMainheading>
            <Appcaption>Good Morning</Appcaption>
          </AppDiv>
          <AppDiv>
            <AppInput
              sx={{
                width: {
                  lg: 544,
                  md: "100%",
                  xs: "100%",
                },
                borderRadius: 3,
              }}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </AppDiv>
          <Stack
            sx={{
              display: {
                lg: "block",
                xs: "none",
              },
            }}
            spacing={2}
            direction="row"
          >
            <Badge badgeContent={4} color="warning">
              <EmailIcon color="action" />
            </Badge>
            <Badge badgeContent={99} color="warning">
              <NotificationsNoneIcon color="action" />
            </Badge>
          </Stack>
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 3 }}>
          {theme.direction === "rtl" ? (
            ` <ChevronRightIcon />`
          ) : (
            <AppImage
              onClick={handleDrawerClose}
              src={logo}
              alt="Logo"
              sx={{
                width: open ? "150px" : "70px",
              }}
            />
          )}
        </DrawerHeader>
        <List>
          {listArray.map((text, index) => {
            return (
              <ListItem key={index} sx={{ display: "block" }} onClick={() => handleItemClick(text)}>
                <ListItemContainer
                  isSelected={selectedItem === text}
                  onClick={() => handleItemClick(text)}
                  sx={{
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    {index === 0 && (
                      <HomeIcon
                        sx={selectedItem === text ? { color: "white" } : { color: alpha }}
                      />
                    )}
                    {index === 1 && (
                      <CalendarMonthIcon
                        sx={selectedItem === text ? { color: "white" } : { color: alpha }}
                      />
                    )}
                    {index === 2 && (
                      <EmailIcon
                        sx={selectedItem === text ? { color: "white" } : { color: alpha }}
                      />
                    )}
                    {index === 3 && (
                      <WarningIcon
                        sx={selectedItem === text ? { color: "white" } : { color: alpha }}
                      />
                    )}
                    {index === 4 && (
                      <VolumeUpIcon
                        sx={selectedItem === text ? { color: "white" } : { color: alpha }}
                      />
                    )}
                    {index === 5 && (
                      <ReportIcon
                        sx={selectedItem === text ? { color: "white" } : { color: alpha }}
                      />
                    )}
                    {index === 6 && (
                      <AccountCircleIcon
                        sx={selectedItem === text ? { color: "white" } : { color: alpha }}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemContainer>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <AppDiv component="main" sx={{ flexGrow: 1, p: 6, backgroundColor: "#F9F9F9" }}>
        <DrawerHeader />
        {renderContent()}
      </AppDiv>
    </AppDiv>
  );
}
