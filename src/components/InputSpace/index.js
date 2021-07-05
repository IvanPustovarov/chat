import React from "react";
import { useState, useEffect } from "react";

import "./index.scss";

const InputSpace = ({ onSubmit }) => {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeMessage = (event) => {
    const text = event.target.value;
    setIsDisabled(text.trim().length === 0);
    console.log(isDisabled);
    setMessage(text);
  };


  /**
   * 
   * @param {*} event  -- use preventDefault for not reload, when we have submit
   * 
   * save message in local state and get into props callback
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(message.trim());
    onSubmit(message);
    setMessage("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form__submit">
        <input type="text" onChange={handleChangeMessage} value={message} className="form__input_text"/>
        <button
          type="submit"
          onSubmit={() => handleSubmit}
          className="form__send"
          disabled={isDisabled}
        >
          SEND
        </button>
      </form>
    </div>
  );
};
export default InputSpace;
