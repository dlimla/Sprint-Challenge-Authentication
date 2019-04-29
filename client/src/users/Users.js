import React from 'react';

import axios from 'axios';

class Users extends React.Component {

    state = {
        users: []
    }
    render() {
        return (
            <>
                <h2>Users</h2>

            </>
        )
    }
    
    componentDidMount() {
        
        const headers = {
            authorization: localStorage.getItem('jwt')
        }
        
        const endpoint = 'http://localhost:3300/api/users/';
        axios.get(endpoint, {headers}).then(res => {
            this.setState({ users: res.data });
        }).catch(e => {
            console.error(e)
        })
    }
}
    
    export default Users;