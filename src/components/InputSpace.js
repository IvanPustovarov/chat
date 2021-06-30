import React from "react";
import { useState } from "react";

const InputSpace = () => {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleButtonSubmit = (event) => {
    setMessage(message);
    console.log(message);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleButtonSubmit}>
        <input type="text" onChange={handleChangeMessage} value={message} />
        <button type="submit" onSubmit={() => handleButtonSubmit}>
          OK
        </button>
      </form>
    </div>
  );
};
export default InputSpace;
