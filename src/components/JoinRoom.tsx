import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";



const JoinRoom=()=>{
    const [roomId,setRoomId]=useState("");
    const navigate=useNavigate();
    const JoinRoom=async()=>{
        const res=await axios.post(BASE_URL+"/joinroom",{roomId},{withCredentials:true});
        console.log(res.data);
        navigate("/chatroom",{ state: { roomId } })
    }
   
    useEffect(()=>{
        JoinRoom
    })
    return(
        <div className=" h-96 w-full flex justify-center items-center">

        <input  value={roomId} onChange={(e)=>setRoomId(e.target.value)} type="text" className="h-10 w-96 border border-black bg-gray-100 p-4" placeholder="Enter Room Code"/>
        <button onClick={()=>JoinRoom()} className="mx-4 bg-blue-500 p-2 rounded-lg"  >Join Room</button>
        </div>
    )
}

export default JoinRoom;