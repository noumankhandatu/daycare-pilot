import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../assets/images/logo.png";
import AppIcons from "../atoms/Icon";
import { Appheading } from "../../app-theme";
import AppImage from "../atoms/Image";
import { primary, secondary } from "../../app-theme/colors";
import { footerItems } from "../../utils/static-data";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: primary,
        color: "#fff",
        padding: {
          md: "40px 40px",
          xs: "30px",
        },
        mt: 20,
      }}
    >
      <Box sx={mainDivStyle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 3, md: 0 },
          }}
        >
          <AppImage
            src={logo}
            sx={{
              width: "70%",
              filter:
                "brightness(0) saturate(100%) invert(14%) sepia(6%) saturate(5383%) hue-rotate(184deg) brightness(94%) contrast(85%)",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            mb: { xs: 3, md: 0 },
          }}
        >
          {footerItems?.map((items, id) => (
            <Appheading
              sx={{
                ml: { xs: 0, md: 5 },
                mt: { xs: 2, md: 0 },
                cursor: "pointer",
                fontWeight: "900",
                color: secondary,
              }}
              key={id}
            >
              {items}
            </Appheading>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AppIcons platform="facebook" icon={<LinkedInIcon sx={footerIconStyle} />} />
          <AppIcons platform="twitter" icon={<TwitterIcon sx={footerIconStyle} />} />
          <AppIcons platform="instagram" icon={<FacebookIcon sx={footerIconStyle} />} />
        </Box>
      </Box>
      <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2, color: "black" }}>
        &copy; Copy Right DayCare-Pilot 2023
      </Typography>
    </Box>
  );
};

export default Footer;

const mainDivStyle = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: "center",
  color: "black",
};
const footerIconStyle = {
  width: 29,
  height: 29,
  borderRadius: "19.61px",
  mr: 2,
};
