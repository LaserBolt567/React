import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';
import Welcome from './Welcome';
import ToggelButton from './ToogleButton';
import LinkAction from './LinkAction';

let tick = () => {
    ReactDOM.render(
        <React.StrictMode>
            {<Welcome />}
            {<Clock />}
            <br />
            <ToggelButton />
            <LinkAction />
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
