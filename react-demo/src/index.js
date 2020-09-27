import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';
import Welcome from './Welcome';
import ToggelButton from './ToogleButton';
import LinkAction from './LinkAction';
import Users from './Users';
import Temperature from './Temperature';
import ProductStock from './ProductStock';


const stock = [
    {
        name: 'Sporting Goods',
        products: [
            {
                name: 'Football',
                price: 49.99,
            },
            {
                name: 'Baseball',
                price: 9.99,
            },
            {
                name: 'Basketball',
                price: 29.99,
            },
        ]
    },
    {
        name: 'Electronics',
        products: [
            {
                name: 'iPod Touch',
                price: 99.99,
            },
            {
                name: 'iPhone 5',
                price: 399.99,
            },
            {
                name: 'Nexus 7',
                price: 199.99,
            },
        ]
    }
];

ReactDOM.render(
    <React.StrictMode>
        {<Welcome />}
        {<Clock />}
        <br />
        <ToggelButton />
        <LinkAction />
        <Users />
        <Temperature />
        <ProductStock stock={stock} />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
