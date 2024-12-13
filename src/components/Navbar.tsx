import axios from "axios";
import Button from "./Button";
import { BASE_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Navbar=()=>{
    const dispatch=useDispatch();
    const handleLogout=async()=>{
        const res=await axios.post(BASE_URL+"/logout",{},{withCredentials:true});
        dispatch(removeUser(res.data));
    }
    useEffect(()=>{
        handleLogout
    })
    return(
        <div className="h-16  p-3 flex gap-5 justify-center ">
            <Button title={"Home"}  dest={"/"} />
            <Button title={"DashBoard"} dest={"/body"} />
            <Button title={"Create Room"} dest={"/createroom"} />
            <Button title={"Join Room"} dest={"/joinroom"} />
            <Button title={"Logout"}  dest={"/login"} event={()=>handleLogout()} />
        </div>
    )
}

export default Navbar;