const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const app = express();
const cors=require("cors")
require('dotenv').config()
const{connection}=require("./db");
const {route}=require("./route/team.data")
app.use(express.json());
app.use(cors());
app.use(route);

const server = http.createServer(app)
const io = socketio(server)

io.on("connection",(socket)=>{
    console.log("got one connection");
    socket.on("greet",(msg)=>{
        console.log(msg);
    });
    socket.emit("msg","welcome!");
})












server.listen(process.env.port, async() =>{
try {
    await connection
    console.log("connected")
} catch (error) {
    console.log("not connected");
}
console.log(`http://localhost:${process.env.port}`);
})
 








