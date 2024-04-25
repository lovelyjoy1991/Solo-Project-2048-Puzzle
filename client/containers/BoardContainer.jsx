import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import actions from '../actions/actions';
import Board from '../components/Board';

const BoardContainer = () => {
  const dispatch = useDispatch();

  return (
    <div className='board-container'>
      <h5>Join the numbers and get to the 2048 tile!</h5>
      <Board />
    </div>
  );
};

export default BoardContainer;
