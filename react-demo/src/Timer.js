import React from 'react';

export default function Timer(props) {
    return (<p><b>Time: </b><em>{props.date.toLocaleTimeString()}</em></p>);
}

