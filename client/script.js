import { io } from "socket.io-client";

const JOIN_ROOM_BUTTON = document.getElementById("join");
const MESSAGE_INPUT = document.getElementById("message");
const ROOM_INPUT = document.getElementById("room");
const FORM = document.getElementById("form");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("Server is connected: ", socket.connected); // true
    console.log("Your session ID: ", socket.id); // ojIckSD2jqNzOqIrAGzL
    
    socket.on("message", (message) => {
        displayMessage(message);
    });
});

socket.on("disconnect", () => {
    console.log("Server is connected: ", socket.connected); // false
});

FORM.addEventListener("submit", e => {
    e.preventDefault();
    const message = MESSAGE_INPUT.value;
    const room = ROOM_INPUT.value;

    if (message === "") return;
    displayMessage(message);

    socket.emit("message", (message));

    MESSAGE_INPUT.value = "";
});

JOIN_ROOM_BUTTON.addEventListener("click", () => {
    const room = ROOM_INPUT.value;
});

function displayMessage(message) {
    const div = document.createElement("div");
    div.className = "text";
    div.textContent = message;
    
    document.getElementById("box").append(div);
}