import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

//conmponents
import Main from "./pages/Main";
import Detail from "./pages/Detail";

render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <Switch>
          <Route path="/:pokemonId" component={Detail} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
