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
        this.handleLink = this.handleLink.bind(this); 
    }

    handleDemo(e) {
        e.preventDefault();
        let user = {
            username: 'Guest User',
            email: 'guestuser@appacademy.io',
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

    handleLink() {
        let linkurl = this.props.formType === 'signup' ? '/login' : 'signup'; 
        this.props.clearErrors(); 
        this.props.history.push(linkurl);
    }

    render() {

        let buttonmsg, usernameInput, headermsg, linkmsg;
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
            linkmsg = `Have an account?`; 
        } else {
            buttonmsg = 'Sign Up';
            usernameInput = <></>; 
            headermsg = 'Log In'; 
            linkmsg =`Don't have an account?`;
        }

        let errormsg = <></>; 

        if (this.props.errors) {
            errormsg = (
                <ul className='errors'>
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
                            <input type="password" 
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
                        <i className="far fa-id-card"></i>
                          Try the Demo Account
                    </p>
                </div>

                <div className='session-link'>
                    <p>{linkmsg}</p>
                    <p onClick={this.handleLink} 
                        className="session-link-button">
                        {buttonmsg}
                    </p>
                </div>

                <div className="session-msg">
                    <p>Get the real app.</p>
                </div>

                <div className="session-real-app">
                    <a href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo">
                        <img src="/images/appstore_1.png" alt=""/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXPxlUwAEAAE7BYcROqbd5bl-TwJy%26utm_content%3Dlo%26utm_medium%3Dbadge">
                        <img src="/images/appstore_2.png" alt=""/>
                    </a>
                </div>
            </div>
        );
    }
}

export default SessionForm; 