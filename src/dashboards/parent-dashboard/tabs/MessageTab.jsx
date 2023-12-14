import { useState } from "react";
import noMessageImg from "../../../assets/tab-images/no-message.png";
import AppImage from "../../../components/atoms/Image";
import ChatLayout from "./ChatLayout";

const MessageTab = () => {
  // eslint-disable-next-line no-unused-vars
  const [smsData, setSmsData] = useState(true); // Replace with your actual SMS data

  const renderContent = () => {
    if (!smsData) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <AppImage src={noMessageImg} sx={{ width: "227px", mt: 18 }} />
        </div>
      );
    } else {
      // SMS data is present, render the chat layout
      return <ChatLayout smsData={smsData} />;
    }
  };

  return <>{renderContent()}</>;
};

export default MessageTab;
