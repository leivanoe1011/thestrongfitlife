

import { Switch, Route } from "react-router-dom";


import PrivateRoute from "../hoc/PrivateRoute";
import UnPrivateRoute from "../hoc/UnPrivateRoute";
import IndexPage from "./IndexPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import DashboardPage from "./DashboardPage";
import CreateUserPage from "./CreateUserPage";


function Router(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={IndexPage}  />
                <UnPrivateRoute exact path="/login" component={LoginPage}  />
                <UnPrivateRoute exact path="/register" component={RegisterPage}  />
                <PrivateRoute exact path="/dashboard" roles={["admin","user"]} component={DashboardPage}  />
                <PrivateRoute exact path="/createuser" roles={["admin"]} component={CreateUserPage}  />
            </Switch>
        </div>
    )
}

export default Router;