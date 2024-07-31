const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { 
    cors: {
        origin: "http://localhost:5173/",
    }  
});

let playerScores = [];

io.on("connection", (socket) => {
    console.log('connectMsg');

    socket.on('scoreSubmit', (scores) => {
        playerScores.push(scores);
        console.log(playerScores);
    });
});


httpServer.listen(3000, () => {
    console.log("test mfk");
});