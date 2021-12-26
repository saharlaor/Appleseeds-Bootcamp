import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [isComplete, setComplete] = useState(props.isComplete);

  const toggleComplete = () => {
    setComplete(!isComplete);
  };

  return (
    <div className="Todo">
      <span className={isComplete ? "complete" : "incomplete"}>
        {props.title}
      </span>
      <button onClick={toggleComplete}>
        {isComplete ? <>&#10003;</> : <>&times;</>}
      </button>
    </div>
  );
}

export default Todo;
