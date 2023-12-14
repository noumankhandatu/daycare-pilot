import ParentRoutes from "./ParentRoutes";
import TeacherRoutes from "./TeacherRoutes";
import { Roles } from "./types";

const Routes = () => {
  const role = Roles.PARENT;

  return (
    <div>
      <>
        {role === Roles.PARENT ? (
          <ParentRoutes />
        ) : role === Roles.TEACHER ? (
          <TeacherRoutes />
        ) : (
          "No Role Found"
        )}
      </>
      ;
    </div>
  );
};

export default Routes;
