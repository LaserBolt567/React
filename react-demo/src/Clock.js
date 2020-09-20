import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    tick = () => {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        this.timerId = setInterval(this.tick, 1000);
    }

    render() {
        return (<p><b>Time: </b><em>{this.state.date.toLocaleTimeString()}</em></p>);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}

