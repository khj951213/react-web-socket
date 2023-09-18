import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [time, setTime] = useState([0]);
  const ws = new WebSocket("ws://localhost:3299/ws");

  const apiCall = {
    event: "bts:subscribe",
    data : { channel: "order_book_btcusd"}
  };

  ws.onopen = (event) => {
    console.log("connected");
  };

  ws.onmessage = (event) => {
    const json = JSON.parse(event.data);
    console.log(json);
  };

  const firstBids = time.map((item) => {
    return (
      <div>
        <p>{item}</p>
      </div>
    )
  })

  return (
    <div>{firstBids}</div>
  );
}

export default App;
