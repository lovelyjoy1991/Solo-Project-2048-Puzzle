import React from 'react';
import Grid from './Grid';
import Tile from './Tile';
import Cell from './Cell';

const ROW_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;
const Board = (props) => {
  const board = document.getElementById('board');
  const cellCreator = (props) => {
    const cells=[];
    for (let i=0; i<ROW_SIZE*ROW_SIZE ; i++ ){
      const cell = 
    }
  };
  return (
    <div className='board'>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Tile />
      <Tile />
    </div>
  );
};

export default Board;
