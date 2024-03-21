import React, { useState, useEffect } from "react";
import { useSocket } from '../providers/Socket';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { socket } = useSocket();
  const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleRoomJoined = ({ roomId }) => {
    navigate(`/room/${roomId}`)
  };

  useEffect(() => {
    socket.on('joined-room', handleRoomJoined);
    
  }, [socket]);

  const handleJoinRoom = () => {
    socket.emit("join-room", { emailId: email, roomId: roomId });
  };

  useEffect(() => {
    console.log('Updated Room ID:', roomId);
  }, );

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
        onClick={handleRoomJoined}
        className="h-10 px-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-red-200"
      >
        Enter Room
      </button>
    </div>
  );
};

export default HomePage;
