import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import actions from '../actions/actions';
import Board from '../components/Board';

const BoardContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className='board-container'>
      <Board />
    </div>
  );
};

export default BoardContainer;
