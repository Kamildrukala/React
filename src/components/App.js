import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import News from './News';
import Menu from './Menu';
import Home from './pages/Home'
import Content from './Content'

export default class App extends React.Component {
  state = {
    zeznania: []
  }

  addZeznanie = (zeznanie) => {
    this.setState({ zeznania: [...this.state.zeznania, zeznanie] })
  }

  render() {
    return <Router>
      <Menu />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/news">
          <News zeznania={this.state.zeznania} />
        </Route>

        <Route path="/form">
          <Content addZeznanie={this.addZeznanie} />
        </Route>
      </Switch>
    </Router>
  }
}