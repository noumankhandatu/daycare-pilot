import rocketImage from "../../assets/images/rocket.png";
import bg from "../../assets/images/cloud.png";
import AppImage from "../atoms/Image";
import AppDiv from "../atoms/appDiv";

const CloudBackground = () => {
  return (
    <div>
      <AppDiv sx={imageStyle}>
        <AppDiv sx={{ textAlign: "right", position: "relative", top: "150px" }}>
          <AppImage src={rocketImage} alt="" sx={{ width: "110px" }} />
        </AppDiv>
      </AppDiv>
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
