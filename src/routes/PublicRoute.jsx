import Login from "../pages/Login";
import { ROUTE_PATH } from "../utils/enums";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../components/wrapper/AppLayout";
import ForgetPassword from "./../pages/ForgetPassword";
import RecoveryPassword from "./../pages/RecoveryPassword";
import LoginSuccessfull from "./../pages/LoginSuccessfull";
import KidInformation from "./../pages/KidInformation";
import GuardianInformation from './../pages/GuardianInfo';
import ParentDashboard from './../dashboards/parent-dashboard/index';

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {["/", ROUTE_PATH.LOGIN].map((path, key) => (
          <Route
            key={key}
            exact
            path={path}
            element={
              <AppLayout>
                <Login />
              </AppLayout>
            }
          />
        ))}
        <Route
          exact
          path={ROUTE_PATH.FORGET_PASSWORD}
          element={
            <AppLayout>
              <ForgetPassword />
            </AppLayout>
          }
        />
        <Route
          exact
          path={ROUTE_PATH.RECOVERY_PASSWORD}
          element={
            <AppLayout>
              <RecoveryPassword />
            </AppLayout>
          }
        />
        <Route
          exact
          path={ROUTE_PATH.LOGIN_SUCCESSFULL}
          element={
            <AppLayout>
              <LoginSuccessfull />
            </AppLayout>
          }
        />
        <Route
          exact
          path={ROUTE_PATH.KID_INFORMATION}
          element={
            <AppLayout>
              <KidInformation />
            </AppLayout>
          }
        />
        <Route
          exact
          path={ROUTE_PATH.GUARDIAN_INFORMATION}
          element={
            <AppLayout>
              <GuardianInformation />
            </AppLayout>
          }
        />
        <Route exact path={ROUTE_PATH.PARENT_DASHBOARD} element={<ParentDashboard />} />
        <Route exact path={"*"} element={`No route found`} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
