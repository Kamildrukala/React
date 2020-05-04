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
      { id: '1', kto: 'a bbbb', zeznanie: 'c', comments: [] },
      { id: '2', kto: 'adasdasd nnasdasd', zeznanie: 'ccccasa', comments: [] }
    ]
  }

  addZeznanie = (zeznanie) => {
    this.setState({ zeznania: [...this.state.zeznania, zeznanie] })
  }

  addComment = (id, comment) => {
    const { zeznania } = this.state
    const zeznanieIndex = zeznania.findIndex((zeznanie) => zeznanie.id === id)
    let noweZeznanie = zeznania[zeznanieIndex]

    noweZeznanie.comments.push(comment)
    this.setState({ zeznania: [...zeznania.slice(0, zeznanieIndex), noweZeznanie, ...zeznania.slice(zeznanieIndex + 1, zeznania.length )] })
  }

  render() {
    return <Router>
      <Menu zeznania={this.state.zeznania} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path='/news/:id'>
          <Zeznanie
            zeznania={this.state.zeznania}
            addComment={this.addComment}
          />
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