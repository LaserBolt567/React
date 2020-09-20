import React from 'react';
import { InfoBanner, WarnBanner } from './Banner';

export default class ToggleButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Button clicked");
        console.log("isToggleOn: ", this.state.isToggleOn);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
        }));
        console.log("isToggleOn: ", this.state.isToggleOn);
    }

    componentDidMount() {
        this.setState({
            isToggleOn: true,
        });
    }

    render() {
        return (
            <div>
                Toggle State: {this.state.isToggleOn ? 'ON' : 'OFF'}
                <button onClick={this.handleClick}>Click Me</button>
                <InfoBanner level={this.state.isToggleOn ? 'info' : 'warn'} />
                <WarnBanner level={this.state.isToggleOn ? 'info' : 'warn'} />
            </div>
        );
    }
}