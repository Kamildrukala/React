import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Zeznanie extends Component {
  state = {
    zeznanie: null
  }

  componentDidMount = () => {
    this.setState({ zeznanie: this.props.zeznania.find((x) => x.id === this.props.match.params.id )})
  }

  render() {
    return <>
      { this.state.zeznanie && <div>
        { this.state.zeznanie.kto }
      </div> }
      { !this.state.zeznanie && <div>
        nie znaleziono
      </div> }
      <Link to='/news'>
        Back
      </Link>
    </>
  }
}

export default withRouter(Zeznanie)
