import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { Appcaption, Appheading } from "../../app-theme";
import AppDiv from "../atoms/appDiv";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppDiv
        onClick={handleClick}
        sx={{
          display: {
            lg: "flex",
            xs: "none",
          },
          alignItems: "center",
        }}
      >
        <Avatar src={"https://mui.com/static/images/avatar/1.jpg"} sx={{ width: 56, height: 56 }} />
        <AppDiv sx={{ ml: 1 }}>
          <Appheading sx={{ color: "black" }}>Hi Cody Fisher</Appheading>
          <Appcaption>Good Morning</Appcaption>
        </AppDiv>
      </AppDiv>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
