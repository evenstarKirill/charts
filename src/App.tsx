import React from 'react';
import ChartBuilder from './components/ChartBuilder/ChartBuilder';

import { config } from './config';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <ChartBuilder config={config} />
    </div>
  );
}

export default App;
