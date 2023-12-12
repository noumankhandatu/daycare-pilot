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
    <div
      style={{
        display: "flex",
        background: "white",
      }}
    >
      {/* Left side (Paper showing sender information) */}
      <div
        style={{
          flex: "0 0 30%",
          padding: "16px",
          borderRight: "1px solid #ccc",
        }}
      >
        <MsgRecieverCard />
        <MsgRecieverCard />
      </div>

      <div
        style={{
          flex: "1",
          padding: "16px",
          overflowY: "auto",
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        {dummySmsData.messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: message.sender === dummySmsData.sender ? "flex-end" : "flex-start",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "10px",
                borderRadius: 10,
                borderBottomLeftRadius: message.sender === dummySmsData.sender ? 10 : 0,
                borderBottomRightRadius: message.sender !== dummySmsData.sender ? 10 : 0,
                backgroundColor: message.sender === dummySmsData.sender ? "#DCF8C6" : "#E6E6E6",
                position: "relative",
                marginLeft: "30px",
                marginRight: "30px",
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
              <strong>{message.sender}:</strong> {message.text}
              {message.sender == dummySmsData.sender && (
                <Avatar
                  alt="Remy Sharp"
                  src={image}
                  size="small"
                  sx={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: "#ccc",
                    marginRight: "8px",
                    position: "absolute",
                    bottom: 0,
                    right: -35,
                  }}
                />
              )}
            </div>
          </div>
        ))}
        <AppDiv sx={{height:"120px"}}/>
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
      </div>
    </div>
  );
};

export default ChatLayout;
