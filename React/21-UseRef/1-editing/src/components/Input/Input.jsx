import React, { useEffect, useRef, useState } from "react";
import "./Input.css";

function Input() {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [visible]);

  return (
    <div className="Input">
      {visible && <input type="text" ref={inputRef} />}
      <button onClick={(e) => setVisible((vis) => !vis)}>
        {visible ? "save" : "edit"}
      </button>
    </div>
  );
}

export default Input;
