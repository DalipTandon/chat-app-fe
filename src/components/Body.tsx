import DashBoard from "./DashBoard"
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../utils/dashboardSlice";

const Body=()=>{
    const dispatch=useDispatch();
    const dashboardData=async()=>{
        const res=await axios.get(BASE_URL+"/availableroom",{withCredentials:true});
       // console.log(res.data.data);
        dispatch(addData(res.data.data))
    }
    useEffect(()=>{
        dashboardData();
    },[])
    return(
        <div className="">
        <DashBoard/>
        </div>
    )
}

export default Body;