import { IconButton } from "@mui/material";

// eslint-disable-next-line react/prop-types
const AppIcons = ({ platform, icon, sx, onClick }) => {
  return (
    <IconButton onClick={onClick} color="inherit" aria-label={platform} style={sx}>
      {icon}
    </IconButton>
  );
};

export default AppIcons;
