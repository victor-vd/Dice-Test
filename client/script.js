const JOIN_ROOM_BUTTON = document.getElementById("join");
const MESSAGE_INPUT = document.getElementById("message");
const ROOM_INPUT = document.getElementById("room");
const FORM = document.getElementById("form");

FORM.addEventListener("submit", e => {
    e.preventDefault();
    const message = MESSAGE_INPUT.value;
    const room = ROOM_INPUT.value;

    if (message === "") return;
    displayMessage(message);

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