import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignUpForm from "./SignUpForm";

export default class SignUpModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            rePassword: "",

        }
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={() => this.props.handleClose('abort', {})}>
                <Modal.Header closeButton>
                    <Modal.Title> SignUp </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpForm data={this.state} handleChange={this.handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={(e) => this.handleSignIn('cancel', {}, e)}>Close</Button>
                    <Button variant="outline-success" onClick={(e) => this.handleSignIn('save', this.state, e)}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}