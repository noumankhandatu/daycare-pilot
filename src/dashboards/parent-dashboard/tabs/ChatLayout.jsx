import AppPaper from "../../../components/atoms/paper";
import AppInput from "../../../components/atoms/Input";
import SendIcon from "@mui/icons-material/Send";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import AppDiv from "../../../components/atoms/appDiv";
import { Avatar, InputAdornment } from "@mui/material";
import MsgRecieverCard from "../../../components/molecules/MsgRecieverCard";
import image from "../../../assets/avatars/nas.webp";
import { dummySmsData } from "../../../utils/static-data";

const ChatLayout = () => {
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
        <MsgRecieverCard />
        <MsgRecieverCard />
      </AppDiv>

      {/* Right side */}
      <AppPaper sx={mainDiv}>
        {dummySmsData.messages.map((message, index) => (
          <AppDiv
            key={index}
            sx={{
              display: "flex",
              justifyContent: message.sender === dummySmsData.sender ? "flex-end" : "flex-start",
              marginBottom: "16px",
            }}
          >
            <AppDiv
              style={{
                padding: "10px",
                borderRadius: 10,
                borderBottomLeftRadius: message.sender === dummySmsData.sender ? 10 : 0,
                borderBottomRightRadius: message.sender !== dummySmsData.sender ? 10 : 0,
                backgroundColor: message.sender === dummySmsData.sender ? "#DCF8C6" : "#E6E6E6",
                position: "relative",
                marginLeft: {
                  lg: "30px",
                  xs: "10px",
                },
                marginRight: {
                  lg: "30px",
                  xs: "10px",
                },
              }}
            >
              {message.sender !== dummySmsData.sender && (
                <Avatar
                  alt="Remy Sharp"
                  src={image}
                  size="small"
                  sx={{ width: 24, height: 24, position: "absolute", bottom: 0, left: -35 }}
                />
              )}
              {/* both texts friend and me */}
              {/* <strong>{message.sender}:</strong> */}
              <span style={{ fontSize: 14 }}>{message.text}</span>
              {message.sender == dummySmsData.sender && (
                <Avatar alt="Remy Sharp" src={image} size="small" sx={avatarStyle} />
              )}
            </AppDiv>
          </AppDiv>
        ))}
        <AppDiv sx={{ height: "120px" }} />
        <AppDiv
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: 20,
            width: "95%",
          }}
        >
          <CameraAltIcon />
          <AddCircleIcon sx={{ ml: 1, mr: 1 }} />
          <PhotoSizeSelectActualIcon sx={{ mr: 1 }} />
          <AppInput
            sx={{
              width: {
                md: "100%",
                xs: "100%",
              },
              borderRadius: 3,
            }}
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SendIcon />
                </InputAdornment>
              ),
            }}
          />
        </AppDiv>
      </AppPaper>
    </AppDiv>
  );
};

const leftSide = {
  flex: "0 0 30%",
  padding: "16px",
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
  padding: {
    lg: "20px",
    xs: "10px",
  },
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

const avatarStyle = {
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  backgroundColor: "#ccc",
  marginRight: "8px",
  position: "absolute",
  bottom: 0,
  right: -35,
};
export default ChatLayout;
