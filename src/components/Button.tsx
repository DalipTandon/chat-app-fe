import { Link } from "react-router-dom";


const Button=(prop:any)=>{
    const {title,dest}=prop;
    return(
      <Link to={dest}> <button  className=" hover:bg-[#69aff6] p-2 font-serif text-center rounded-lg">{title}</button></Link> 
    )
}

export default Button;