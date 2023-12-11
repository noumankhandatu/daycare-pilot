import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Appcaption, Appheading } from "../../app-theme";

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
      <Box
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
        <Box sx={{ ml: 1 }}>
          <Appheading sx={{ color: "black" }}>Hi Cody Fisher</Appheading>
          <Appcaption>Good Morning</Appcaption>
        </Box>
      </Box>
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
