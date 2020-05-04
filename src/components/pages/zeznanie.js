import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Zeznanie extends Component {
  state = {
    zeznanie: null,
    currentComment: ''
  }

  componentDidMount = () => {
    this.setState({ zeznanie: this.props.zeznania.find((x) => x.id === this.props.match.params.id )})
  }

  addComment = () => {
    if (this.state.currentComment !== '') {
      this.props.addComment(this.state.zeznanie.id, this.state.currentComment)
      this.setState({ currentComment: '' })
    }
  }

  onChangeHandler = (event) => {
    this.setState({ currentComment: event.target.value })
  }

  render() {
    return <>
      { this.state.zeznanie && <div>
        { this.state.zeznanie.kto }

        <br />
        <input type='text' value={this.state.currentComment} onChange={this.onChangeHandler} />
        <button onClick={this.addComment}>
          Dodaj komentarz
        </button>

        { this.state.zeznanie.comments.map((comment) => {
          return <div>
            {comment}
          </div>
        }) }
      </div> }
      { !this.state.zeznanie && <div>
        nie znaleziono
      </div> }
      <br />
      <br />
      <Link to='/news'>
        Back
      </Link>
    </>
  }
}

export default withRouter(Zeznanie)
