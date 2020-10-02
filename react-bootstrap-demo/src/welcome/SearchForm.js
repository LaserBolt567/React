import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { SearchIcon } from '@primer/octicons-react'
import styles from './styles.module.css';

export default function SearchForm() {
    return (
        <Form inline>
            <Form.Group controlId="filterContacts">
                <Form.Control type='text' placeholde='Search...' custom className={styles.contacts_search} />
                <Button variant="primary" size='sm'><SearchIcon size={16} /></Button>
            </Form.Group>
        </Form>
    );
}