import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./pages/not-found";
import UserIndex from "./pages/user";
import Login from "./pages/user/user-login";

const RouterConfig=() => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact render={() =><Redirect to="/login"/>}/>
                <Route exact path="/login" component={Login}/>
                <Route path="/user" component={UserIndex}/>
                <Route path="/404" component={NotFound}/>
                <Redirect to="/404"/>
            </Switch>
        </Router>
    )
}
export default RouterConfig;