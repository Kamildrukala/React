import React, { Component } from 'react';

class Content extends Component {
  state = {
    imie: '',
    nazwisko: '',
    zeznanie: '',
    permissionGranted: false
  }

  dodajZeznanie = (e) => {
    e.preventDefault()

    if (this.state.imie === '' || this.state.nazwisko === '' || this.state.zeznanie === '') {
      alert('uzupelnij brakujace pole')
    }

    if (this.state.permissionGranted) {
      this.props.addZeznanie({
        kto: [this.state.imie, this.state.nazwisko].join(' '),
        zeznanie: this.state.zeznanie
      })

      this.setState({
        imie: '',
        nazwisko: '',
        zeznanie: '',
        permissionGranted: false
      })
      
    } else {
      alert('zaznacz zgode')
    }
  }

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Imię</label>
            <input type="text" name="first-name" placeholder="First Name" value={this.state.imie} onChange={(e) => this.setState({ imie: e.target.value })}/>
          </div>
          <div className="field">
            <label>Nazwisko</label>
            <input type="text" name="last-name" placeholder="Last Name" value={this.state.nazwisko} onChange={(e) => this.setState({ nazwisko: e.target.value })}/>
          </div>
          <div className="field">
            <label>Zeznanie</label>
            <input type="text" name="adress" placeholder="Zeznanie" value={this.state.zeznanie} onChange={(e) => this.setState({ zeznanie: e.target.value })}/>
          </div>
          <div className="field">
            <div className="ui checkbox" onClick={() => this.setState({ permissionGranted: !this.state.permissionGranted })}>
              <input type="checkbox" tabIndex="0" className="hidden" checked={this.state.permissionGranted} />
              <label>Akceptuję wszystkie warunki współpracy</label>
            </div>
          </div>
          <button className="ui button" type="submit" onClick={this.dodajZeznanie} >
            Potwierdź zeznania
          </button>
        </form>
      </div>
    );
  };
}

export default Content;