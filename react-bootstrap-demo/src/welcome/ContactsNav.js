import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default class ContactsNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchKey: null,
            contacts: []
        }
    }

    componentDidMount() {
        this.setState({
            contacts: [
                {
                    id: 1,
                    name: "Ethan Hunt",
                },
                {
                    id: 2,
                    name: "Ethan Hunt",
                },
                {
                    id: 3,
                    name: "Ethan Hunt",
                },
                {
                    id: 4,
                    name: "Ethan Hunt",
                },
                {
                    id: 5,
                    name: "Ethan Hunt",
                },
                {
                    id: 6,
                    name: "Ethan Hunt",
                },
                {
                    id: 7,
                    name: "Ethan Hunt",
                },
                {
                    id: 8,
                    name: "Ethan Hunt",
                },
                {
                    id: 9,
                    name: "Ethan Hunt",
                },
                {
                    id: 10,
                    name: "Ethan Hunt",
                },
                {
                    id: 11,
                    name: "Ethan Hunt",
                },
                {
                    id: 12,
                    name: "Ethan Hunt",
                },
                {
                    id: 13,
                    name: "Ethan Hunt",
                },
                {
                    id: 14,
                    name: "Ethan Hunt",
                },
                {
                    id: 15,
                    name: "Ethan Hunt",
                },
                {
                    id: 16,
                    name: "Ethan Hunt",
                },
                {
                    id: 17,
                    name: "Ethan Hunt",
                },
                {
                    id: 18,
                    name: "Ethan Hunt",
                },
                {
                    id: 19,
                    name: "Ethan Hunt",
                },
                {
                    id: 20,
                    name: "Ethan Hunt",
                },
                {
                    id: 21,
                    name: "Ethan Hunt",
                },
                {
                    id: 22,
                    name: "Ethan Hunt",
                },
            ]
        })
    }

    render() {

        let contactElements = this.state.contacts.map(contact => {
            return (
                <Nav.Item className="contact-link">
                    <Nav.Link href={"#" + contact.id}>{contact.name}</Nav.Link>
                </Nav.Item>
            );
        })

        return (

            <Nav fill={true} variant="pills" className={"flex-column "} as="ul">
                {contactElements}
            </Nav>
        );
    }
}