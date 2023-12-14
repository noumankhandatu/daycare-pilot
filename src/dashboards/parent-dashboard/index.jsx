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
import { DrawerElementTypes } from "./type";
import { AppMainheading, Appcaption, Appfont } from "../../app-theme";
import AppInput from "./../../components/atoms/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeTab from "./tabs/HomeTab";
import CalenderTab from "./tabs/CalenderTab";
import ProfileMenu from "../../components/molecules/menu";
import AppDiv from "../../components/atoms/appDiv";
import MessageTab from "./tabs/MessageTab";
import AlertTab from "./tabs/AlertTab";
import AnnouncementsTab from "./tabs/Announcements ";
import ProfileTab from "./tabs/ProfileTab";
import AppIcons from "../../components/atoms/Icon";
import ReportTab from "./tabs/ReportTab";
import AppPaper from "../../components/atoms/paper";
import noNotifcation from "../../assets/images/no-notifcation.png";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

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
  zIndex: 1202,
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
  const [selectedItem, setSelectedItem] = React.useState(DrawerElementTypes.HOME);
  const [showNotifcation, setShowNotification] = React.useState(false);
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
      case DrawerElementTypes.HOME.toString():
        return <HomeTab />;
      case DrawerElementTypes.CALENDAR:
        return <CalenderTab />;
      case DrawerElementTypes.MESSAGE:
        return <MessageTab />;
      case DrawerElementTypes.ALERTS:
        return <AlertTab />;
      case DrawerElementTypes.ANNOUNCMENT:
        return <AnnouncementsTab />;
      case DrawerElementTypes.REPORT:
        return <ReportTab />;
      case DrawerElementTypes.PROFILE:
        return <ProfileTab />;
      default:
        return <Typography>404 No Tab Found</Typography>;
    }
  };
  const handleMessage = () => {
    setSelectedItem(DrawerElementTypes.MESSAGE);
  };
  const handleNotification = () => {
    setShowNotification((prev) => !prev);
  };

  const handleClickAwayEvent = () => {
    setShowNotification(false);
  };

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
          <AppInput
            sx={{
              width: {
                lg: 500,
                xs: "100%",
                height: 50,
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
          <Stack spacing={2} direction="row" sx={{ ml: 1, mr: 1, position: "relative" }}>
            <Badge badgeContent={4} color="warning" onClick={handleMessage}>
              <EmailIcon color="action" />
            </Badge>
            {showNotifcation && (
              <ClickAwayListener onClickAway={handleClickAwayEvent}>
                <AppDiv sx={{ position: "absolute", right: 0, top: 30 }}>
                  <AppPaper
                    sx={{
                      width: {
                        lg: "300px",
                        xs: "200px",
                      },
                      height: {
                        lg: 450,
                        xs: 300,
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AppImage
                      src={noNotifcation}
                      sx={{
                        height: {
                          lg: "200px",
                          xs: "130px",
                        },
                      }}
                    />
                  </AppPaper>
                </AppDiv>
              </ClickAwayListener>
            )}
            <Badge badgeContent={99} color="warning">
              <NotificationsNoneIcon color="action" onClick={handleNotification} />
            </Badge>
          </Stack>
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      {open && (
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
                  height: open ? "110px" : "70px",
                }}
              />
            )}
          </DrawerHeader>
          <List>
            {DrawerElements?.map((items, index) => {
              const text = items.title;
              const Icon = items.Icon;
              return (
                <ListItem
                  key={index}
                  sx={{ display: "block" }}
                  onClick={() => handleItemClick(text)}
                >
                  <ListItemContainer
                    isSelected={selectedItem === text}
                    sx={{
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <AppIcons
                        platform="arrow"
                        icon={Icon}
                        sx={selectedItem === text ? { color: "white" } : { color: alpha }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      disableTypography
                      sx={{ opacity: open ? 1 : 0 }}
                      primary={<Appfont sx={{ fontSize: 14, fontWeight: 600 }}>{text}</Appfont>}
                    />
                  </ListItemContainer>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}

      <AppDiv sx={sty}>
        <DrawerHeader />
        {renderContent()}
      </AppDiv>
    </AppDiv>
  );
}
const DrawerElements = [
  {
    title: DrawerElementTypes.HOME,
    Icon: <HomeIcon />,
  },
  {
    title: DrawerElementTypes.CALENDAR,
    Icon: <CalendarMonthIcon />,
  },
  {
    title: DrawerElementTypes.MESSAGE,
    Icon: <EmailIcon />,
  },
  {
    title: DrawerElementTypes.ALERTS,
    Icon: <WarningIcon />,
  },
  {
    title: DrawerElementTypes.ANNOUNCMENT,
    Icon: <VolumeUpIcon />,
  },
  {
    title: DrawerElementTypes.REPORT,
    Icon: <ReportIcon />,
  },
  {
    title: DrawerElementTypes.PROFILE,
    Icon: <AccountCircleIcon />,
  },
];

const sty = {
  flexGrow: 1,
  backgroundColor: "#F9F9F9",
  pt: 6,
  pl: {
    lg: 2,
    xs: 1,
  },
  pr: {
    lg: 2,
    xs: 1,
  },
  pb: 6,
  width: "10%",
};
