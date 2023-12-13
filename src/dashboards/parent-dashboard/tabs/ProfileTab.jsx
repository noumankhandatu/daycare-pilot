/* eslint-disable react/jsx-key */
import AppPaper from "../../../components/atoms/paper";
import AppDiv from "../../../components/atoms/appDiv";
import ProfileInfoCard from "../../../components/molecules/ProfileInfoCard";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CopyrightIcon from "@mui/icons-material/Copyright";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import MyProfile from "./ProfileTabs/myProfle";
const ProfileTab = () => {
  const [selectedText, setSelectedText] = useState("");

  const profileItems = [
    {
      title: "Profile",
      Icon: <DescriptionIcon />,
    },
    {
      title: "My Children",
      Icon: <PersonOutlineIcon />,
    },
    {
      title: "Settings",
      Icon: <SettingsOutlinedIcon />,
    },
    {
      title: "About Us",
      Icon: <CopyrightIcon />,
    },
    {
      title: "Help & FAQ",
      Icon: <HelpOutlineIcon />,
    },
    {
      title: "Refer Friend & Family",
      Icon: <ShareIcon />,
    },
  ];

  const renderContent = () => {
    switch (selectedText) {
      case "Profile":
        return <MyProfile />;

      default:
        return <>404 No Tab Found</>;
    }
  };
  return (
    <AppDiv
      sx={{
        display: {
          md: "flex",
          xs: "block",
        },
      }}
    >
      {/* Left side (Paper showing sender information) */}
      <AppDiv sx={leftSide}>
        {profileItems.map((item, index) => {
          return (
            <ProfileInfoCard
              key={index}
              {...item}
              index={index}
              setSelectedText={setSelectedText}
              selectedText={selectedText}
            />
          );
        })}
      </AppDiv>

      {/* Right side */}
      <AppPaper sx={mainDiv}>{renderContent()}</AppPaper>
    </AppDiv>
  );
};

const leftSide = {
  flex: "0 0 30%",
  position: {
    md: "fixed",
    xs: "static",
  },
  width: {
    lg: "400px",
    md: "300px",
    xs: "100%",
  },
  background: "linear-gradient(90deg, rgba(249,249,249,1) 0%, rgba(255,255,255,1) 100%)",
  height: {
    lg: "100vh",
    md: "100%",
  },
};

const mainDiv = {
  flex: "1",
  padding: 6,
  overflowY: "auto",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  marginLeft: {
    lg: 60,
    md: 40,
    xs: 0,
  },
};

export default ProfileTab;
