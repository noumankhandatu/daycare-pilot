import { Box } from "@mui/system";
import rocketImage from "../../assets/images/rocket.png";
import bg from "../../assets/images/cloud.png";
import AppImage from "../atoms/Image";

const CloudBackground = () => {
  return (
    <div>
      <Box sx={imageStyle}>
        <Box sx={{ textAlign: "right", position: "relative", top: "150px" }}>
          <AppImage src={rocketImage} alt="" sx={{ width: "110px" }} />
        </Box>
      </Box>
    </div>
  );
};

export default CloudBackground;

const imageStyle = {
  height: {
    md: "450px",
    xs: "400px",
  },
  backgroundImage: `url(${bg})`,
  backgroundSize: "contain",
  backgroundRepeat: {
    lg: "repeat",
    md: "no-repeat",
    xs: "no-repeat",
  },
};
