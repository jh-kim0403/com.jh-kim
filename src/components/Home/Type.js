import React from "react";
import Typewriter from "typewriter-effect";

const defaultStrings = [
  "Software Engineer",
  "Programmer",
  "Future Entrepreneur",
  "Web Enthusiast",
];

function Type({ strings = defaultStrings, delay = 55, deleteSpeed = 35 }) {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        delay,
        deleteSpeed,
      }}
    />
  );
}

export default Type;
