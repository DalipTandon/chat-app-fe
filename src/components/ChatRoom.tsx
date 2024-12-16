import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/messageSlice";

const ChatRoom = () => {
    const location = useLocation();
    const roomId = location.state?.roomId || "";
    const chatdata = useSelector((store: any) => store.message) || [];
    const wsRef = useRef<WebSocket | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();
    const [roomName,setRoomName]=useState("");
    //@ts-ignore
    const user=useSelector((store)=>store.user) 
    const roomData = async (roomId: string) => {
        try {
            const res = await axios.get(`${BASE_URL}/room/${roomId}`, { withCredentials: true });
            const chats = res.data?.data?.chats || [];
            chats.forEach((chat: { user: string; message: string }) => {
                dispatch(addMessage(chat.message));
              
            });
            setRoomName(res.data.data.roomName);
        } catch (error) {
            console.error("Error fetching room data:", error);
        }
    };

    
    const sendMessage = async (message: string) => {
        try {
            await axios.post(
                `${BASE_URL}/message`,
                { roomId, message },
                { withCredentials: true }
            );
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleSend = () => {
        if (wsRef.current && inputRef.current?.value) {
            const message = inputRef.current.value;

          
            wsRef.current.send(
                JSON.stringify({
                    type: "chat",
                    payload: { roomId, message ,user},
                })
            );

            sendMessage(message);

            inputRef.current.value = "";
        }
    };

    useEffect(() => {
        if (roomId) {
            roomData(roomId);
        }

        const ws = new WebSocket("ws://localhost:3000");
        ws.onopen = () => {
            ws.send(
                JSON.stringify({
                    type: "join",
                    payload: { roomId },
                })
            );
        };
        ws.onmessage = (event) => {
            console.log("Received WebSocket data:", event.data);
        
            try {
                const data = JSON.parse(event.data); 
        
                const message = data?.message || data?.payload?.message;
        
                if (message) {
                    dispatch(addMessage(message)); 
                } else {
                    console.error("Unexpected WebSocket data format:", data);
                }
            } catch (error) {
                console.error("Error parsing WebSocket message:", error);
            }
        };
        
        
        ws.onclose = () => console.log("WebSocket connection closed");

        wsRef.current = ws;

        return () => {
            ws.close();
        };
    }, [roomId]);

    return (
        <div className="p-5 h-5/6 w-full flex flex-col justify-center items-center">
            <div>
                <h4 className="font-bold text-2xl text-center">{roomName}</h4>
                <h4 className="text-xl">{roomId}</h4>
            </div>
            <div className="p-4 h-96 w-1/2 mt-10 shadow-lg shadow-blue-400 bg-gray-100 overflow-y-scroll">
                {chatdata.length > 0 ? (
                    chatdata.map((msg: string, index: number) => (
                        <div className="m-2" key={index}>
                            <span className="font-bold">{user?.username } : </span>
                            <span>{msg}</span>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-500 text-center">No messages yet.</div>
                )}
            </div>
            <div>
                <input
                    ref={inputRef}
                    className="p-2 w-96 m-4 border border-black bg-gray-100"
                    type="text"
                    placeholder="Enter your message"
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-blue-400 font-bold rounded-lg w-24"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
