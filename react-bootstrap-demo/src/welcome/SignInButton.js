import React from "react";
import Button from "react-bootstrap/Button";

import SignInModal from "./SignInModal";

class SignInButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    handleShow = (e) => {
        e && e.preventDefault();
        this.setState({
            show: true,
        });
    }

    handleClose = (action, data) => {
        if (action === 'save') {
            console.log("Authenticating user...", data);
            this.postSignIn(data);
            console.log("Authentication successful...");
            this.cancelShow();
        } else {
            console.log("User authentication canceled...");
            this.cancelShow();
        }
    }

    cancelShow = () => {
        console.log("Canceling SignIn...")
        this.setState((state) => ({
            show: false,
        })
        );
    }

    postSignIn = (data) => {
        console.log("Sign in successful");
    }

    render() {
        console.log("this.state.show: ", this.state.show);
        return (
            <React.Fragment>
                <Button variant="info" onClick={this.handleShow}>
                    SignIn
            </Button>
                <SignInModal show={this.state.show} handleClose={this.handleClose} />
            </React.Fragment>
        );
    }
}

export default SignInButton;