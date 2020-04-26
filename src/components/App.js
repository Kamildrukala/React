import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import News from './News';
import Menu from './Menu';

export default function App() {
  return (
    <Router>
        <Menu />

        <Switch>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
    </Router>
  );
}