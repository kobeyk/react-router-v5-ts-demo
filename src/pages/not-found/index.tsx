import { FC, ReactElement } from "react";
interface IProps{
    history:any;
}
const NotFound:FC<IProps> = ({
    history
}):ReactElement => {

  const path2Home=() => {
    history.push("/")
  }
  return (
    <div style={{backgroundColor:"pink"}}>
        NotFound
        <hr/>
        <button onClick={path2Home}>/</button>
    </div>
  )
}

export default NotFound;