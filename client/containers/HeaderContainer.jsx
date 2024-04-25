import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../components/Logo';
import Score from '../components/Score';
import Best from '../components/Best';
import ResetGame from '../components/ResetGame';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className='header-container'>
      <Logo />
      <Score />
      <Best />
      <ResetGame />
      <Login />
      <SignUp />
    </div>
  );
};

export default HeaderContainer;
