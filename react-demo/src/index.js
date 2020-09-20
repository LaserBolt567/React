import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';
import Welcome from './Welcome';
import ToggelButton from './ToogleButton';
import LinkAction from './LinkAction';
import Users from './Users';
import Temperature from './Temperature';

ReactDOM.render(
    <React.StrictMode>
        {<Welcome />}
        {<Clock />}
        <br />
        <ToggelButton />
        <LinkAction />
        <Users />
        <Temperature />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
