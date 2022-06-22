import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const UserDetail:FC = ({

}):ReactElement => {

  return (
    <div>
        UserDetail
        <div>
          <Link to="/user/info">UserInfo</Link>
        </div>
    </div>
  )
}

export default UserDetail;