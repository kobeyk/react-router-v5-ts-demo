import { FC } from "react"
import { Link } from 'react-router-dom'
interface IProps{
    history:any
}
const UserInfo:FC<IProps> = (props) => {
  return (
    <div>
        UserInfo
        <hr/>
        <div>
            <button onClick={()=>props.history.push("/")}>Login</button>
            <hr/>
            <Link to="/user/detail">UserDetail</Link>
        </div>

    </div>
  )
}

export default UserInfo