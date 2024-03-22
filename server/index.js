const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const httpServer = require('http').createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(bodyParser.json());
app.use(cors());

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log("User", emailId, "Joined Room", roomId);
    emailToSocketIdMap.set(emailId, socket.id);
    socket.join(roomId);
    socket.emit('joined-room', { roomId });
    socket.broadcast.to(roomId).emit('user-joined', { emailId });
    console.log("User", emailId, "Room Joined", roomId);
  });
});

httpServer.listen(8001, () => { console.log("Socket server running at PORT 8001"); });
