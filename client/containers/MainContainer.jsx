import React from 'react';
import { useSelector } from 'react-redux';
import BoardContainer from './BoardContainer';
import HeaderContainer from './HeaderContainer';

const MainContainer = () => {
  return (
    <div className='container'>
      <div className='outerBox'>
        <h1 id='header'>2048</h1>
        <HeaderContainer />
        <BoardContainer />
      </div>
    </div>
  );
};

export default MainContainer;
