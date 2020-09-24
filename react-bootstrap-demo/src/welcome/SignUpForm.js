import React from 'react';
import Form from "react-bootstrap/Form";

export default class SignUpForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={1} controlId="formGrigFirstName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Firstname" />
                    </Form.Group>
                    <Form.Group as={2} controlId="formGrigLastname">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Lastname" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={1} controlId="formGrigEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={1} controlId="formGrigPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group as={2} controlId="formGrigRePassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="password" placeholder="ReEnter password" />
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}