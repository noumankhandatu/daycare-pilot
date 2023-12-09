import { IconButton } from "@mui/material";

// eslint-disable-next-line react/prop-types
const AppIcons = ({ platform, icon, sx }) => {
  return (
    <IconButton color="inherit" aria-label={platform} style={sx}>
      {icon}
    </IconButton>
  );
};

export default AppIcons;
