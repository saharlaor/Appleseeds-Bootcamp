import React from "react";
import "./Checkbox.css";

function Checkbox({ label, checked, toggleChecked }) {
  const checkboxEl = (
    <input
      type="checkbox"
      name={label}
      id={label}
      onChange={toggleChecked}
      checked={checked}
    />
  );
  return (
    <div className="Checkbox">
      {checkboxEl}
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default Checkbox;
