import React from "react";
import LightboardCell from "./LightboardCell";


export default function Lightboard(props) {
  const { gridSize } = props;

  function generateGrid() {
    const grid = [];
    for (let row = 0; row < gridSize; row++) {
      const rowCells = [];
      for (let col = 0; col < gridSize; col++) {
        rowCells.push(
          <LightboardCell key={`${row}-${col}`} />
        );
      }
      grid.push(
        <div key={row} className="row">
          {rowCells}
        </div>
      );
    }
    return grid;
  }
  return <div className="lightboard">{generateGrid()}</div>;
}