import { Link } from "react-router-dom";

interface Button{
    title:String,
    dest:any,
    event?:any
}

const Button=(prop:Button)=>{
    const {title,dest,event}=prop;
    return(
      <Link to={dest}> <button onClick={event} className=" hover:bg-[#69aff6] p-2 font-serif text-center rounded-lg">{title}</button></Link> 
    )
}

export default Button;