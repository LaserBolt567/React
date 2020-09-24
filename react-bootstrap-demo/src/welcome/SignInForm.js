import React from 'react';
import Form from "react-bootstrap/Form";

export default class SignInForm extends React.Component {

    handleChange = (key, value) => {
        console.log(key, value);
        let data = {};
        data[key] = value;
        this.props.handleChange(data);
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.props.data.email} onChange={(e) => this.handleChange('email', e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.props.data.password} onChange={(e) => this.handleChange('password', e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Rember Me" value={this.props.data.rememberMe} onChange={(e) => this.handleChange('rememberMe', e.target.checked)} />
                </Form.Group>
            </Form>
        );
    }
}