import { Intent } from "../scripts/intentVerify.js";
// api/index.js
var socket = new WebSocket("ws://localhost:8080/ws");

let connect = () => {
    //console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

   socket.onmessage = msg => {
    Intent(JSON.parse(msg.data))
  }; 

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };  
};

let register = (info) => {
  info.intent = "register"
  socket.send(JSON.stringify(info));
};
let login = (info) => {
  info.intent = "login"
  socket.send(JSON.stringify(info));
};

export { connect, register, login };