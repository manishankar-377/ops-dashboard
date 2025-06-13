import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <MyButton />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

        </div>
    );
}

function MyButton() {
    return (
        <button className="App-link">I'm a Button</button>
    )
}

export default App;
