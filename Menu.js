import React from 'react';
import Content from './Content';
import News from './News';

class Menu extends React.Component {
    render() {
        return (
            <div className="ui bottom attached segment pushable">
                <div className="ui visible inverted left vertical sidebar menu">
                <button
                    className="item"
                    onClick={() => this.setState({showSomething: true})}>
                    News
                </button>
                <button
                    className="item"
                    onClick={() => this.setState({showSomething: true})}>
                    Kartoteki
                </button>
                <button
                    className="item"
                    onClick={() => this.setState({showSomething: true})}>
                    Lista 60
                </button>
                <button
                    className="item"
                    onClick={() => this.setState({showSomething: true})}>
                    Hall of Fame
                </button>
                </div>
                <div className="pusher">
                    <div className="ui basic segment">
                        <h3 className="ui header"><Content /></h3>
                    </div>
                </div>
            </div>    
        );
    };
}

export default Menu;