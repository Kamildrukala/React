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
import Zeznanie from './pages/zeznanie'

export default class App extends React.Component {
  state = {
    zeznania: [
      { id: '1', kto: 'a bbbb', zeznanie: 'c'},
      { id: '2', kto: 'adasdasd nnasdasd', zeznanie: 'ccccasa'}
    ]
  }

  addZeznanie = (zeznanie) => {
    this.setState({ zeznania: [...this.state.zeznania, zeznanie] })
  }

  render() {
    return <Router>
      <Menu zeznania={this.state.zeznania} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path='/news/:id'>
          <Zeznanie zeznania={this.state.zeznania} />
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