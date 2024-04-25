import React from 'react';
import Grid from './Grid';

const ROW_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;
const Board = (props) => {
  const board = document.getElementById('board');
  const grid = new Grid(board);
  return (
    <div className='board'>
      <Grid />
      <Grid />
      <Grid />
      <Grid />
    </div>
  );
};

export default Board;
