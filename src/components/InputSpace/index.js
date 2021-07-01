import React from "react";
import { useState } from "react";

const InputSpace = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (event) => {
    const text = event.target.value;
    text.trim();
    if (text.length > 0) {
      setMessage(text);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(message);
    onSubmit(message);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeMessage} value={message} />
        <button type="submit" onSubmit={() => handleSubmit}>
          OK
        </button>
      </form>
    </div>
  );
};
export default InputSpace;
