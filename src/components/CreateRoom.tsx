import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/config";


const CreateRoom=()=>{
    const[toggle,setToggle]=useState(false);
    const[roomName,setRoomName]=useState("");

    const createRoom=async()=>{
        const res=await axios.post(BASE_URL+"/createroom",{roomName,isPrivate:toggle},{withCredentials:true});
        console.log(res.data);
    }
    useEffect(()=>{
        createRoom;
    })
    return(
        <div className=" h-96 w-full flex justify-center items-center">

              <div className=" ">  
            <input value={roomName} onChange={(e)=>setRoomName(e.target.value)} type="text" className="h-10 w-96 border border-black bg-gray-100 p-4" placeholder="Enter Room name"/>
            <button className="mx-4 bg-blue-500 p-2 rounded-lg" onClick={()=>createRoom()} >Create Room</button>
            <br></br>
            <input className="scale-x-150 px-4 mx-4 accent-[#EF8354] ml-32 my-4" type="checkbox"  onClick={()=>setToggle(!toggle)}/>
            <label className="font-mono font-bold  ">Private Room</label>
            <h5 className="mx-10 text-md text-red-400">Private Rooms are only accessible by Room Code!</h5>
            </div>
        </div>
    )
}

export default CreateRoom;