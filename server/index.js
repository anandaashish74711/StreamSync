const express=require('express') ;
const bodyParser=require('body-parser');
const {Server}=require('socket.io')
const cors = require('cors');

const app=express();
const io = new Server({
   cors:true,
});
app.use(bodyParser.json());
app.use(cors()); 


const emailToSocketIdMap = new Map();
io.on("connection", (socket) => {
   console.log(`Socket Connected`, socket.id);
   socket.on("room:join", (data) => {
     const { email, room } = data;
     emailToSocketIdMap.set(email, socket.id);
     socketidToEmailMap.set(socket.id, email);
     io.to(room).emit("user:joined", { email, id: socket.id });
     socket.join(room);
     io.to(socket.id).emit("room:join", data);
   })
   });

app.listen(8000,()=>{console.log("Http server running at PORT 8000")});
io.listen(8001);