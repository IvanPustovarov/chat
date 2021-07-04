import React from "react";
import { useState } from "react";

import "./index.scss";

const InputSpace = ({ onSubmit }) => {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChangeMessage = (event) => {
    const text = event.target.value;
    text.trim();
    setMessage(text);
    if(text.length === 0) {
      setIsDisabled(true);
    }
    if(text.length) {
      setIsDisabled(false)
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
