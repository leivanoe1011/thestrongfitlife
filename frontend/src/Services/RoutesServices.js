import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../hoc/PrivateRoute";
import UnPrivateRoute from "../hoc/UnPrivateRoute";
import IndexPage from "../Components/Home/IndexPage";
import LoginPage from "../Components/LoginPage";
import RegisterPage from "../Components/CreateUser/RegisterPage";
import DashboardPage from "../Components/Dashboard/DashboardPage";
import CreateUserPage from "../Components/Chat/CreateUserPage";
import ChatroomPage from "../Components/Chat/ChatPage";

function CustomRoutes() {
  return (
      <Switch>
        <Route exact path="/" render={IndexPage} />
        <UnPrivateRoute exact path="/login" component={LoginPage} />
        <UnPrivateRoute exact path="/register" component={RegisterPage} />
        <PrivateRoute
          exact
          path="/dashboard"
          roles={["admin", "user"]}
          component={DashboardPage}
        />
        <PrivateRoute
          exact
          path="/createuser"
          roles={["admin"]}
          component={CreateUserPage}
        />
        {/* The socket lives within the Auth Context */}
        <PrivateRoute
          path="/chatroom/:id"
          roles={["admin", "user"]}
          component={ChatroomPage}
        />
      </Switch>
  );
}

export default CustomRoutes;
