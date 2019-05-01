import React from 'react';
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }

    render() {
        const {loggedin, logout} = this.props;
        
        return (
            <>
                <h2>Nav bar here</h2>
                {loggedin ? (
                    <button onClick={logout}>Log Out</button>
                    ) : (
                    <Link to="/login">Log In</Link>
                    )}
            </>
        );
    }
}

export default NavBar; 