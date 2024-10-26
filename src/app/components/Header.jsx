"use client"

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";

const texts = [
  "The Transformation",
  "The Magic",
  "The Strategy",
];

function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const headerStyle = {
    textAlign: 'center',
    fontSize: '2rem',
  };

  const animatedTextStyle = {
    fontFamily: 'auto',
    fontWeight: 'bold',
    animation: 'fade 3s infinite',
  };

  const linkStyle = {
    padding: '10px 20px',
    borderRadius: '50px',
    borderWidth: 'thin',
    borderColor: 'white',
    textAlign: 'center',
    display: 'flex',
    width: '20%',
    margin: 'auto',
    justifyContent: 'center',
  };

  return (
    <div>
      <h2 style={headerStyle}>
        {ForsideData.title1} <br />
        <span style={animatedTextStyle}>{texts[index]}</span> <br />
        {ForsideData.title3}
      </h2>
      <a style={linkStyle} href="/Contact">
        {ForsideData.button}
      </a>
    </div>
  );
}

export default Header;
