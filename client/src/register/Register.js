import React from 'react';
import axios from 'axios';

class Register extends React.Component {

    state = {
        username: "",
        password: "",
    }

    render() {
        return (
            <>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            name="username"
                            placeholder="Username"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                        <input
                            name="password"
                            placeholder="Password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </>
        )
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]:value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const endpoint = 'http://localhost:3300/api/register';

        axios.post(endpoint, this.state)
            .then(res => {
                // console.log('response data', res.data.token)
                localStorage.setItem('jwt', res.data.token)
                this.props.history.push('/users');
            }).catch(e => {
                console.error(e)
            })
    }
}

export default Register