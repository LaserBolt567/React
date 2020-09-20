import React from 'react';

export default class LinkAction extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log("Link triggered");
    }

    render() {
        return (
            <a href="www.google.co.in" onClick={this.handleClick}>Click me also</a>
        );
    }
}