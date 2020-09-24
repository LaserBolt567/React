import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class WelcomeHeader extends React.Component {
    render() {
        return (
            <header>
                <Jumbotron fluid>
                    Welcome to React Bootstrap Demo
                </Jumbotron>
            </header>
        );
    }
}