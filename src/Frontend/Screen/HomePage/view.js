import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';

class App extends Component {
    render() {
        const { history, changeLanguage } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <h1 onClick={changeLanguage} className="App-title">Welcome to React</h1>
                </header>
                <Link to="/loginPage">Home</Link>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
                <FormattedMessage
                    id="hello"
                />
            </div>
        );
    }
}

export default App;
