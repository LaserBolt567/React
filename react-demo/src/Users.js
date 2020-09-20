import React from 'react';

export default class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Divakar'
                },
                {
                    id: 2,
                    name: 'Ravi'
                },
                {
                    id: 3,
                    name: 'Usha'
                },
                {
                    id: 4,
                    name: 'Satyanarayana'
                }
            ],
        }
    }

    getUsers = () => {
        let usersList = this.state.users.map((user) => <li key={user.id.toString()}>{user.name}</li>);
        return usersList;
    }

    render() {
        console.log(this.getUsers());
        return (
            <ul>
                {this.getUsers()}
            </ul>
        );
    }
}