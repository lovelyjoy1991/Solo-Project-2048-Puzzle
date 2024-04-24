import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import styles from './css/styles.css';

const App = () => {
  return (
    <div id='app'>
      <h1>2048</h1>
      <MainContainer />
    </div>
  );
};

export default App;
