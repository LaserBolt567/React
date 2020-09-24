import React from "react";
import Button from "react-bootstrap/Button";
import SignUpModal from "./SignUpModel";

export default class SignUpButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Button variant="info">SignUp</Button>
                <SignUpModal />
            </React.Fragment>
        );
    }
}