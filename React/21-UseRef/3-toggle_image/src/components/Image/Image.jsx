import React, { useRef, useState } from "react";
import "./Image.css";

function Image({ srcs, alt }) {
  // const imagePath = require(`../../assets/img/${src}.png`);
  // const imageBnWPath = require(`../../assets/img/${src}_bnw.png`);
  // const [isHovered, setIsHovered] = useState(false);
  const source = srcs.bnw;

  const imgRef = useRef();
  return (
    <div className="Image">
      <img
        ref={imgRef}
        src={source}
        alt={alt}
        onMouseOver={() => (imgRef.current.src = srcs.color)}
        onMouseOut={() => (imgRef.current.src = srcs.bnw)}
        width={800}
      />
    </div>
  );
}

export default Image;
