import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignInForm from "./SignInForm";

export default class SignInModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            rememberMe: false,
        }
    }

    handleSignIn = (action, data, e) => {
        e.preventDefault();
        this.props.handleClose(action, data);
    }

    handleChange = (data) => {
        this.setState(data);
    }

    render() {
        console.log("this.props.show: ", this.props.show);
        return (
            <Modal show={this.props.show} onHide={() => this.props.handleClose('abort', {})}>
                <Modal.Header closeButton>
                    <Modal.Title> SignIn </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignInForm data={this.state} handleChange={this.handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={(e) => this.handleSignIn('cancel', {}, e)}>Close</Button>
                    <Button variant="outline-success" onClick={(e) => this.handleSignIn('save', this.state, e)}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}