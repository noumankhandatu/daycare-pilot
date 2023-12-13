/* eslint-disable react/prop-types */
import { Appfont } from "../../app-theme";
import AppIcons from "./../atoms/Icon";
import EastIcon from "@mui/icons-material/East";
import { alpha, styled } from "@mui/material/styles";
import { primary } from "../../app-theme/colors";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

const ListItemContainer = styled(ListItemButton)(({ theme, selectedText }) => ({
  height: 48,
  width: "100%",
  justifyContent: open ? "initial" : "center",
  backgroundColor: selectedText ? primary : "transparent",
  "&:hover": {
    backgroundColor: selectedText ? primary : theme.palette.action.hover,
  },
  borderRadius: "10px",
  color: selectedText ? "white" : "black",
}));
const ProfileInfoCard = ({ title, Icon, index, selectedText, setSelectedText }) => {
  let text = title;

  const handleItemClick = (text) => {
    setSelectedText(text);
  };

  return (
    <>
      <ListItem key={index} sx={{ display: "block" }} onClick={() => handleItemClick(text)}>
        <ListItemContainer
          selectedText={selectedText === text}
          sx={{
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          <ListItemIcon sx={{ minWidth: "30px" }}>
            <AppIcons
              platform="arrow"
              icon={Icon}
              sx={selectedText === text ? { color: "'white'" } : { color: alpha }}
            />
          </ListItemIcon>
          <ListItemText
            disableTypography
            sx={{ opacity: open ? 1 : 0 }}
            primary={<Appfont sx={{ fontSize: 14, fontWeight: 600 }}>{text}</Appfont>}
          />
          <AppIcons platform="arrow" icon={<EastIcon />} />
        </ListItemContainer>
      </ListItem>

      <Divider />
    </>
  );
};

export default ProfileInfoCard;
