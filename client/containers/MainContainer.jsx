import React from 'react';
import { useSelector } from 'react-redux';
import BoardContainer from './BoardContainer';
import HeaderContainer from './HeaderContainer';

const MainContainer = () => {
  return (
    <div className='container'>
      <HeaderContainer />
      <BoardContainer />
    </div>
  );
};

export default MainContainer;
