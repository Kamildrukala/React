import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>Imię</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label>Nazwisko</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div className="field">
                        <label>Adres</label>
                        <input type="text" name="adress" placeholder="Adress" />
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" tabindex="0" className="hidden" />
                            <label>Akceptuję wszystkie warunki współpracy</label>
                        </div>
                    </div>
                    <button className="ui button" type="submit">Potwierdź zeznania</button>
                </form>
            </div>
        );
    };
}

export default Content;