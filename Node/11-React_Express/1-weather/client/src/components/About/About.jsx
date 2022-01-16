import React from "react";

import myImage from "../../assets/img/me.png";
import "./About.css";

function About() {
  return (
    <div className="About">
      <img class="portrait" src={myImage} alt="It's a me, Mario!" />
    </div>
  );
}

export default About;
