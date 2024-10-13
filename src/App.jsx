import React from 'react';
import styles from './App.module.css';
import TempDisplay from './components/TempDisplay/TempDisplay';

const App = () => {
  return (
    <div className={styles.container}>
      <TempDisplay />
    </div>
  )
}

export default App;