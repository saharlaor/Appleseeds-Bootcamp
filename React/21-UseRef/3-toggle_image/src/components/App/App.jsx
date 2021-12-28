import React, { useRef, useState } from "react";
import Image from "../Image/Image";

import Itzik from "../../assets/img/Itzik.png";
import Itzik_bnw from "../../assets/img/Itzik_bnw.png";
import internet from "../../assets/img/internet.png";
import internet_bnw from "../../assets/img/internet_bnw.png";
import flexbox_frog from "../../assets/img/flexbox_frog.png";
import flexbox_frog_bnw from "../../assets/img/flexbox_frog_bnw.png";

import "./App.css";

function App() {
  const imgArr = {
    color: {
      Itzik,
      internet,
      flexbox_frog,
    },
    bnw: {
      Itzik: Itzik_bnw,
      internet: internet_bnw,
      flexbox_frog: flexbox_frog_bnw,
    },
  };
  const images = ["Itzik", "internet", "flexbox_frog"].map((name) => (
    <Image
      srcs={{ color: imgArr.color[name], bnw: imgArr.bnw[name] }}
      alt={name}
    />
  ));
  return <div className="App">{images}</div>;
}

export default App;
