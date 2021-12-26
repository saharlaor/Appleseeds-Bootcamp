import React from "react";
import "./TimeInput.css";

function TimeInput({ title, milliseconds, ratio, changeHandler }) {
  const value = milliseconds / ratio;

  const handleChange = (e) => {
    const newValue = e.target.value;
    changeHandler(newValue * ratio);
  };

  return (
    <div className="TimeInput">
      <label htmlFor={title}>{title}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default TimeInput;
