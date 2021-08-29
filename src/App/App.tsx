import React from 'react';
import styles from './App.module.css';
import { Footer, Header } from '../components';
import { HomePage } from '../pages/HomePage';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
