import React, { useEffect } from "react";
import { useSocket } from "../providers/Socket";
export const RoomPage=()=>{
    const {socket}=useSocket();
    const handleNewUserJoined=(data)=>{
        const {emailId}=data;
        console.log('New user joined room',emailId)
    }
    useEffect(()=>{
        socket.on('user-joined',handleNewUserJoined)
    },[socket])
    return(
        
        <div>
           <h1>Room no 512</h1> 
        </div>
    )
}
export default RoomPage;