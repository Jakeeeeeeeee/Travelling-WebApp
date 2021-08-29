import React from 'react';
import styles from './App.module.css';
import { Footer, Header } from '../components';
import { HomePage, SignUpPage, LogInPage, TravelDetailPage } from '../pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signUp' component={SignUpPage} />
          <Route path='/logIn' component={LogInPage} />
          <Route path='/travelDetail/:travelRouteID' component={TravelDetailPage} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
