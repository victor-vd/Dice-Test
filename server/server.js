const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { 
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    } 
});



io.on("connection", (socket) => {
    console.log("connected");
    socket.on("message", (message) => {
        console.log(message);
        socket.broadcast.emit("message", (message));
    })
});

httpServer.listen(3000);