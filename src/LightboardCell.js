import React from "react";
import { useEffect, useState } from "react";

export default function LightboardCell() {
  const [color, setColor] = useState("white");
  const colors = ["orange", "red", "blue", "green", "yellow"];

  useEffect(function () {
    const interval = setInterval(function () {
      setColor(function (prevColor) {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 1000);

    return function cleanup() {
      clearInterval(interval);
    };

  }, []);
  return (
    <div className="cell" style={{ backgroundColor: color, width: "5px", height: "10px", margin: "1px", display: "inline-block" }}></div>
  );
}