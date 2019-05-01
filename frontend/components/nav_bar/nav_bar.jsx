import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout()
            .then( () => this.props.history.push('/login')); 
    }

    render() {
        const {loggedin} = this.props;
        let logoutbutton = <></>; 
        if (loggedin) {
            logoutbutton = <button onClick={this.handleLogout}>Log Out</button>;
        }
        
        // add to="" to Link once complete homepage

        return (
            <div className="navbar">
                <div className="nav-index">
                    <Link> 
                        <i className="fab fa-instagram"></i>
                        <h3 className="logo">Fiestagram</h3>
                    </Link>
                </div>
                <div>
                    {logoutbutton}
                </div>
            </div>  
        );
    }
}

export default NavBar; 