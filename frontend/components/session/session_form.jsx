import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;  
        this.props.processForm(user); 
    }

    render() {
        let buttonmsg, usernameInput, headermsg, linkurl; 

        if (this.props.formType === 'signup') {
            buttonmsg = 'Log In';
            usernameInput = (
                <label>Username
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleChange('username')} />
                </label>
            ); 
            headermsg = 'Sign Up'; 
            linkurl = '/login';
        } else {
            buttonmsg = 'Sign Up';
            usernameInput = <></>; 
            headermsg = 'Log In'; 
            linkurl ='/signup'; 
        }

        let errormsg = <></>; 

        if (this.props.errors) {
            errormsg = (
                <ul>
                    {this.props.errors.map( 
                        (error,idx) => <ul key={idx}>{error}</ul>)}
                </ul>
            );
        }

        return(
            <form onSubmit={this.handleSubmit}>
                <h3>{headermsg}</h3>
                {usernameInput}
                <label>Email
                    <input type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')} />
                </label>
                <label>Password
                    <input type="text" 
                        value={this.state.password}
                        onChange={this.handleChange('password')}/>
                </label>
                <button>Submit</button>
                {errormsg}
                <Link to={linkurl}>{buttonmsg}</Link>
            </form>
        );
    }
}

export default SessionForm; 