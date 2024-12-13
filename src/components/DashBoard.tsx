
import { useSelector } from "react-redux";
import RoomCard from "./RoomCard";



const DashBoard=()=>{
    //@ts-ignore
      const data=useSelector((store)=>store.dashboard)
      //console.log(data);
      
    return(
        <>
         <h4 className="text-center text-2xl font-serif "><span className="text-blue-500">Welcome</span> To Dashboard</h4>
         <h5 className="text-center text-2xl m-4">Public Spaces</h5>
       {  data &&
        <div className=" h-screen flex gap-5 justify-center  flex-wrap">
            {data.map((data:any)=>{
              return <RoomCard prop={data} key={data._id}/>
            })}
        </div>}
        </>
    )
}

export default DashBoard;