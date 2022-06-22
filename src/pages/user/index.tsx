import { FC, ReactElement, useEffect } from "react"
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import NotFound from "../not-found"
import UserInfo from "./user-info"
import UserDetail from "./user-info/user-detail"
interface IProps{
    history:any
    match:any;
    location:any
}
const UserIndex:FC<IProps> = ({
    history,match,location
}):ReactElement => {

    useEffect(() => {
        console.log("history",history);
        console.log("match",match);
        console.log("location",location);
    },[])

  return (
    <div>
        <h1>我是UserIndex</h1>
        <hr />
        <Router>
            <Switch>
                <Route exact path="/user" render={()=><Redirect from="/user" to="/user/info"/>}/>
                <Route exact path="/user/info" component={UserInfo} />
                <Route exact  path="/user/detail" component={UserDetail} />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </div>
  )
}

export default UserIndex