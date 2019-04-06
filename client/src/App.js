import React, { Component } from 'react';
import './App.css';


import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './login/Login';
import Users from './users/Users';
import Register from './register/Register';



class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/login">Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp; | &nbsp;
            <NavLink to="/register">Register</NavLink>
          &nbsp; | &nbsp;
          <button onClick={this.logout}>Logout</button>

        </header>
        <main>
          <Route path="/users" component = {Users}/>
          <Route path="/register" component = {Register}/>
          <Route path="/login" component = {Login}/>


        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }
}

export default withRouter(App);
