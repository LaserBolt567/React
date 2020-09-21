import React from 'react';

let code = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default function TemperatureInput(props) {
    return (
        <tr>
            <td>{code[props.tempType]}:</td>    <td><input type='text' value={props.tempValue} onChange={props.handleChange}></input></td>
        </tr>
    );
}