import React from 'react';
import ContactsNav from './ContactsNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './styles.module.css';
import SearchForm from './SearchForm';

export default class AppMain extends React.Component {
    render() {
        return (
            <Container as="main" fluid className="main-container">
                <Row className="main-row">
                    <Col lg={2} className={styles.main_contacts}>
                        <SearchForm />
                        <ContactsNav />
                    </Col>
                    <Col lg={{ offset: 2 }}>
                        <p>Messages</p>
                    </Col>
                </Row >
            </Container >
        );
    }
}