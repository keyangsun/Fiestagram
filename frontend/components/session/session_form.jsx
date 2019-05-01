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
        this.handleDemo = this.handleDemo.bind(this); 
    }

    handleDemo(e) {
        e.preventDefault();
        let user = {
            username: 'keyang',
            email: 'keyang@aa.io',
            password: 'password'
        }; 
        this.props.processDemo(user);
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
        let buttonmsg, usernameInput, headermsg, linkurl, linkmsg;
        let greeting = ''; 

        if (this.props.formType === 'signup') {
            buttonmsg = 'Log In';
            usernameInput = (
                <div className='field'>
                    <label> 
                    <input type="text"
                        value={this.state.username}
                        placeholder='Username'
                        onChange={this.handleChange('username')} />
                    </label>
                </div>
            ); 
            headermsg = 'Sign Up'; 
            greeting = 'Sign up to see photos from your friends.';
            linkurl = '/login';
            linkmsg = `Have an account?`; 
        } else {
            buttonmsg = 'Sign Up';
            usernameInput = <></>; 
            headermsg = 'Log In'; 
            linkurl ='/signup'; 
            linkmsg =`Don't have an account?`;
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

                <div className='form-box'>

                    <form onSubmit={this.handleSubmit} className='session-form'>
                        <h3 className='logo'>Fiestagram</h3>
                        <h3 className='session-greeting'>{greeting}</h3>
                        {usernameInput}
                        <div className='field'>
                            <label>
                            <input type="email"
                                value={this.state.email}
                                placeholder='Email'
                                onChange={this.handleChange('email')} />
                            </label>
                        </div>
                        <div className='field'>
                            <label>
                            <input type="text" 
                                value={this.state.password}
                                placeholder='Password'
                                onChange={this.handleChange('password')}/>
                            </label>
                        </div>

                        <button>{headermsg}</button>
                        {errormsg}
                    </form>

                    <div className='demo-box'>
                        placeholder, not displayed
                        <p>OR</p>
                    </div>

                    
                    <p onClick={this.handleDemo}
                        className='demo-button'>
                        <i class="far fa-id-card"></i>
                          Try the Demo Account
                    </p>
                </div>

                <div className='session-link'>
                    <p>{linkmsg}</p>
                    <Link to={linkurl}>{buttonmsg}</Link>
                </div>
            </div>
        );
    }
}

export default SessionForm; 