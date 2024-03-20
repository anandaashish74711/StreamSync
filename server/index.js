const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);
const io = new Server(server, {
   cors: true,
 });

const emailToSocketMapping = new Map();

io.on('connection', (socket) => {
    console.log("New Connection");

    socket.on("join-room", (data) => {
        const { roomId, emailId } = data;
        console.log("User", emailId, "joined Room", roomId);
        emailToSocketMapping.set(emailId, socket);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("user-joined", { emailId });
    });
});

server.listen(8000, () => {
    console.log("HTTP server running at PORT 8000");
});
