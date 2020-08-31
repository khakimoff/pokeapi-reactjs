import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { List } from './components/List';
import { Detail } from './components/Detail';
import { Abilities } from './components/Abilities';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/:pokemonIndex" component={Detail} />
          <Route
            exact
            path="/:pokemonIndex/:abilitiesIndex"
            component={Abilities}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
