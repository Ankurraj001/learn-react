import React from 'react'
// /**
//  * About Component
//  * @returns nothing
//  */
// function About() {
//   return (
//     <div>About Me</div>
//   )
// }

// export default About

// import "./styles.css";
import { useEffect, useState } from "react";
export default function About() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const update = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", update);
  }, [width]);

  return (
    <div>
      {width > 300 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>hello</div>
          <div> World</div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>Hello</div>
          <p> world</p>
        </div>
      )}
      {width}
    </div>
  );
}
