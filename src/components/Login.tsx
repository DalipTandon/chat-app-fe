import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login=()=>{
    const[username,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setpassword]=useState("");
    const[isLogin,setIsLogin]=useState(false);
    const dispatch=useDispatch();
    const handleSignup=async()=>{
        const res=await axios.post(BASE_URL+"/signup",{
            username,email,password
        },{withCredentials:true});
       dispatch(addUser(res.data));
        
    }
    const handleSignin=async()=>{
        const res=await axios.post(BASE_URL+"/signin",{
            username,password
        },{withCredentials:true})
      //  console.log(res.data);
        dispatch(addUser(res.data));
    }
    useEffect(()=>{
        handleSignup;
    },[])
    useEffect(()=>
     {
        handleSignin;
     }
    ,[])
    return(
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <div className=" h-[370px] w-80 shadow-lg ">
              {isLogin ?  <h4 className="text-center text-3xl font-serif">Signin</h4> :<h4 className="text-center text-3xl font-serif">Signup </h4>}
              
                <input type="text" className="p-3 border rounded-md w-5/6 mx-5 mt-5 " placeholder="Name" value={username} onChange={(e)=>setName(e.target.value)} />
              {!isLogin &&  <input type="text" className="p-3 border rounded-md w-5/6 mx-5 mt-3 " placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />}
                <input type="password" className="p-3 border rounded-md w-5/6 mx-5 my-3 " placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        {isLogin?  <button onClick={()=>handleSignin()}  className="p-3 border rounded-md w-5/6 mx-5 mt-3 bg-blue-300 hover:scale-90">Signin</button>: <button onClick={()=>handleSignup()}  className="p-3 border rounded-md w-5/6 mx-5 mt-3 bg-blue-300 hover:scale-90">Singup</button>}      
            {isLogin?<h5 onClick={()=>setIsLogin(!isLogin)} className="text-sm mx-10 text-black cursor-pointer">new user? click here for signup</h5>:<h5 onClick={()=>setIsLogin(!isLogin)} className="text-sm mx-10 text-black cursor-pointer">Already have an account?click here</h5>}
            </div>
        </div>
    )
}

export default Login;