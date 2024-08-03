const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { 
    cors: {
      origin: "socket-io-test-ten.vercel.app",
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