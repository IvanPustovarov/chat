import React, { useEffect, useState } from "react";
import "./App.scss";

import { getMessages, createMessage } from "./api";

import InputSpace from "./components/InputSpace/index.js";
import MessageSpace from "./components/MessageSpace/index.js";

function App() {
  const [messages, setMessages] = useState([]);

/**
 * 
 * @param {string} message -- get message from input
 * @param {string} userName -- default name
 * 
 * and when we read message from input -- we push it into callback from api
 */
  const handleSubmit = (message, userName = "winston") => {
    createMessage(userName, message).then((message) => {
      setMessages([...messages, message.data()]);
    });
  };
  /**
  * in useEffect we get messages collection from db
  */
  useEffect(() => {
    getMessages("messages").then(setMessages);
  }, []);
  return (
    <MessageSpace className="app">
      <ul>
        {messages.map((message) => (
          <div key={message.id}>
            <div>{message.name}</div>
            <div className="app__message">{message.text}</div>
          </div>
        ))}
      </ul>
      <InputSpace onSubmit={handleSubmit} />
    </MessageSpace>
  );
}

export default App;
