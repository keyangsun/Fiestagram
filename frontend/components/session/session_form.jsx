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
                <div class='field'>
                    <label> 
                    <input type="text"
                        value={this.state.username}
                        placeholder='Username'
                        onChange={this.handleChange('username')} />
                    </label>
                </div>
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

                <div className='form-box'>

                    <form onSubmit={this.handleSubmit} className='session-form'>
                        <h3 className='logo'>Fiestagram</h3>
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
                        placeholder
                        <p>OR</p>
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                </div>

                <Link to={linkurl} className='session-link'>{buttonmsg}</Link>
            </div>
        );
    }
}

export default SessionForm; 