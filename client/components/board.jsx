import React from 'react';
import Grid from './Grid';
import Tile from './Tile';
import Cell from './Cell';

const ROW_SIZE = 4;
const CELL_SIZE = 16;
const CELL_GAP = 2;
const Board = (props) => {
  const board = document.getElementById('board');

  const cells = [];
  for (let i = 0; i < ROW_SIZE * ROW_SIZE; i++) {
    cells.push(
      <Cell
        key={i + 1}
        id={i + 1}
        value={0}
        x={i % ROW_SIZE}
        y={Math.floor(i / ROW_SIZE)}
      />
    );
  }
  // console.log(cells);
  const emptyCells = cells.filter((cell) => cell.props.value == 0);
  // console.log(emptyCells);
  const randomEmptyCell = () => {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  };
  console.log(randomEmptyCell());

  return (
    <div className='board'>
      {cells}

      <Tile />
    </div>
  );
};

export default Board;
