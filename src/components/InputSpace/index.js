import React from "react";
import { useState } from "react";

import "./index.scss";

const InputSpace = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (event) => {
    const text = event.target.value;
    text.trim();
    if (text.length > 0) {
      setMessage(text);
    }
  };

  /**
   * 
   * @param {*} event  -- use preventDefault for not reload, when we have submit
   * 
   * save message in local state and get into props callback
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(message);
    onSubmit(message);
    setMessage("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form__input">
        <input type="text" onChange={handleChangeMessage} value={message} />
        <button
          type="submit"
          onSubmit={() => handleSubmit}
          className="form__send"
        >
          SEND
        </button>
      </form>
    </div>
  );
};
export default InputSpace;
