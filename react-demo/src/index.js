import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

let welcome = (user) => {
    if (user) {
        return <h1>Hello {user}!</h1>
    } else {
        return <h1>Hell World!</h1>
    }
}

let tick = () => {
    const time = (<span>{new Date().toLocaleTimeString()}</span>);
    ReactDOM.render(
        <React.StrictMode>
            {welcome("Divakar")}
            <p><bold>Time: </bold>{time}</p>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

setInterval(
    tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
