import React from 'react';
import TemperatureInput from './TemperatureInput';

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
                <TemperatureInput tempType='c' tempValue={this.state.celsius} handleChange={this.handleCelsiusChange} />
                <TemperatureInput tempType='c' tempValue={this.state.fahrenheit} handleChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}