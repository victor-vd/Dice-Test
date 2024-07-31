import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import Input from './component/Input';

function App() {
  const [score, setScores] = useState({});  
  const socket = io('http://localhost:3000', {
    transports: ['websocket']
  });

  function connectSocket(){
    socket.on("connection", (socket) => {
      console.log(socket);
    });
  }

  function handleInput (event) {
    let { name, value } = event.target;
    let currentObject = {[name]: value}
    setScores((prev) => ({ ...prev, ...currentObject }));
  }

  function sendScores(){
    socket.emit("scoreSubmit", score);
  }

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <>
      <div>
        <h1>
          Multiplayer game
        </h1>
        <p>

        </p>
        <Input name='name' placeholder='Enter your name' handleInput={handleInput}/>
        <Input name='score' placeholder='Enter your score' handleInput={handleInput}/>
      </div>
      <br></br>
      <button onClick={sendScores}>Submit</button>
    </>
  );
}

export default App;
