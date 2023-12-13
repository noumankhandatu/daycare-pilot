import AppDiv from "../../../components/atoms/appDiv";
import ReportCard from "../../../components/molecules/ReportCard";

const ReportTab = () => {
  return (
    <div>
      <AppDiv sx={leftSide}>
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </AppDiv>
    </div>
  );
};

export default ReportTab;
const leftSide = {
  width: {
    xs: "100%",
  },
  height: {
    lg: "100vh",
    md: "100%",
  },
};
