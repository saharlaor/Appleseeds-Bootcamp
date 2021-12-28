import React, { useRef } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="Video">
      <video
        ref={videoRef}
        src="https://fstreaming.net/storage05/98ce9f277013dba35a1eb2cbdb901704/EP.1.v1.1639639632.360p.mp4?mac=ayjniIvcOVRGDS7EtHatd%2BPSYguG5y2NZKc873Efdek%3D&expiry=1640701405662"></video>
      <button onClick={handlePlay}>play</button>
      <button onClick={handlePause}>pause</button>
    </div>
  );
}

export default Video;
