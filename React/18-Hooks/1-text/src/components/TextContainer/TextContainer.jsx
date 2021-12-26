import React, { useState } from "react";
import "./TextContainer.css";

function TextContainer({ content, maxLength }) {
  const [displayed, setDisplayed] = useState(
    `${content.slice(0, maxLength)}...`
  );
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = (e) => {
    e.preventDefault();
    setDisplayed(expanded ? `${content.slice(0, maxLength)}...` : content);
    setExpanded(!expanded);
  };

  return (
    <div className="TextContainer">
      {displayed}
      <a href="/" onClick={handleReadMore}>
        {expanded ? "show less" : "read more"}
      </a>
    </div>
  );
}

export default TextContainer;
