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
                <input type="text"
                    value={this.state.username}
                    placeholder='Username'
                    onChange={this.handleChange('username')} />
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
                <ul className='session-errors'>
                    {this.props.errors.map( 
                        (error,idx) => <li key={idx}>{error}</li>)}
                </ul>
            );
        }

        return(
            <div className='session-form-container'>
                <form onSubmit={this.handleSubmit} className='session-form'>
                    <h3 className='logo'>Fiestagram</h3>
                    {usernameInput}
                    <input type="text"
                        value={this.state.email}
                        placeholder='Email'
                        onChange={this.handleChange('email')} />
                    <input type="text" 
                        value={this.state.password}
                        placeholder='Password'
                        onChange={this.handleChange('password')}/>
                    <button>{headermsg}</button>
                    {errormsg}
                </form>
                <Link to={linkurl} className='session-link'>{buttonmsg}</Link>
            </div>
        );
    }
}

export default SessionForm; 