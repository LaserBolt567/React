import React from 'react';

export default class Temperature extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            celsius: 0,
        }
    }

    componentDidMount() {
        this.setState({
            fahrenheit: this.convertToFahrenheit(this.state.celsius),
        })
    }

    convertToFahrenheit = (c) => {
        return (c * (9 / 5)) + 32;
    }

    convertToCelsius = (f) => {
        return ((f - 32) * (5 / 9));
    }

    handleCelsiusChange = (e) => {
        let c = e.target.value;
        let f = this.convertToFahrenheit(c);
        this.setState({
            fahrenheit: f,
            celsius: c
        });
        console.log("Celsius changed");
    }

    handleFahrenheitChange = (e) => {
        let f = e.target.value;
        let c = this.convertToCelsius(f);
        this.setState({
            celsius: c,
            fahrenheit: f
        });
        console.log("Fah changed");
    }

    render() {
        return (
            <div heat-temp>
                <tr>
                    <td>Celsius:</td>    <td><input type='text' value={this.state.celsius} onChange={this.handleCelsiusChange}></input></td>
                </tr>
                <td>Fahrenheit:</td> <td><input type='text' value={this.state.fahrenheit} onChange={this.handleFahrenheitChange}></input></td>
            </div>
        );
    }
}