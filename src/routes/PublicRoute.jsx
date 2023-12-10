import Login from "../pages/Login";
import Navbar from "./../components/molecules/Navbar";
import Footer from "./../components/molecules/Footer";
import ForgetPassword from "../pages/ForgetPassword";
import RecoveryPassword from "../pages/RecoveryPassword";
import LoginSuccessfull from "./../pages/LoginSuccessfull";
import KidInformation from "../pages/KidInformation";
import GuardianInformation from "../pages/GuardianInfo";
import { ROUTE_PATH } from "../utils/enums";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {["/", ROUTE_PATH.LOGIN].map((path, key) => (
          <Route key={key} exact path={path} element={<Login />} />
        ))}
        <Route exact path={ROUTE_PATH.FORGET_PASSWORD} element={<ForgetPassword />} />
        <Route exact path={ROUTE_PATH.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
        <Route exact path={ROUTE_PATH.LOGIN_SUCCESSFULL} element={<LoginSuccessfull />} />
        <Route exact path={ROUTE_PATH.KID_INFORMATION} element={<KidInformation />} />
        <Route exact path={ROUTE_PATH.GUARDIAN_INFORMATION} element={<GuardianInformation />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default PublicRoutes;
