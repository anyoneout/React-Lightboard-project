import React, { useState } from "react";
import Lightboard from "./Lightboard";

export default function App() {
  const [gridSize, setGridSize] = useState(5);

  function handleGridSizeChange(event) {
    setGridSize(parseInt(event.target.value, 10));
  }

  return (
    <div>
      <h1>Lightboard</h1>
      <label htmlFor="grid-size">Grid Size:</label>
      <input
        id="grid-size"
        type="number"
        value={gridSize}
        onChange={handleGridSizeChange}
      />
      <Lightboard gridSize={gridSize} />
    </div>
  );
}