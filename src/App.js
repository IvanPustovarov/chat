import React, { useEffect, useState } from "react";
import "./App.css";

import { db } from "./firebase";

import InputSpace from "./components/InputSpace";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .get()
      .then((snapshot) => {
        const messages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMessages(messages);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return (
    <div className="App">
      <ul>
        {messages.map((message) => (
          <div key={message.id}>
            <div style={{ fontWeight: "bold" }}>{message.name}</div>
            <div>{message.text}</div>
          </div>
        ))}
      </ul>
      <InputSpace />
    </div>
  );
}

export default App;
