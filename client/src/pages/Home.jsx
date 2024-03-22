import React, { useState } from "react";
import { useSocket } from '../providers/Socket';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { socket } = useSocket();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleRoomJoined = ({ roomId }) => {
    console.log("Room Joined:", roomId);
    navigate(`/room/${roomId}`);
  };

  const handleJoinRoom = () => {
    console.log("Joining room:", roomId);
    socket.emit("join-room", { emailId: email, roomId: roomId });
  };

  socket.on('joined-room', handleRoomJoined);

  console.log("Socket in HomePage:", socket);

  return (
    <div className="homepage-container bg-gray-800 h-screen flex flex-col justify-center items-center">
      <input
        className="mb-4 px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="Enter Your email here"
      />
      <input
        className="mb-4 px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        value={roomId}
        onChange={e => setRoomId(e.target.value)}
        type="text"
        placeholder="Enter your room Code"
      />
      <button
        onClick={handleJoinRoom} 
        className="h-10 px-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-red-200"
      >
        Enter Room
      </button>
    </div>
  );
};

export default HomePage;
