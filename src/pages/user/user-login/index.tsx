import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Login:FC = ({

}):ReactElement => {
    
  return (
    <div>
      Login
      <hr/>
      <Link to="/user">User</Link>
    </div>
  )
}

export default Login;