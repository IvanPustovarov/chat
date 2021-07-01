import React from "react";
import { useState } from "react";

const InputSpace = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
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
