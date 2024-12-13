

const RoomCard=({prop}:any)=>{
    const{roomName,roomId,owner}=prop
    return(
        
        <div className=" h-60 w-96 p-2 flex flex-col items-center  my-1 shadow-lg shadow-blue-300 border border-black hover:scale-105">
            <h4 className="text-3xl my-3 text-blue-500 font-serif">{roomName}</h4>
            <h4 className=" whitespace-nowrap m-2">Created by {owner}</h4>
            <h4 className=" whitespace-nowrap">{roomId}</h4>
            <button className="bg-blue-300 p-2 my-4 font-bold rounded-lg">Join Room</button>
        </div>
        
    )
}

export default RoomCard;


//roomId roomName