import noMessageImg from "../../../assets/tab-images/no-message.png";
import AppImage from "../../../components/atoms/Image";

const MessageTab = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppImage src={noMessageImg} sx={{ width: "227px", mt: 18 }} />
    </div>
  );
};

export default MessageTab;
