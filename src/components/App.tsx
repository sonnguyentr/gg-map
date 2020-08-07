import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import '../styles/index.css';
import GoogleMap from './google-map/GoogleMap';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GoogleMap} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
