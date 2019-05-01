import React from 'react';

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
        
        return (
            <>
                <h2>Nav bar here</h2>
                {logoutbutton}
            </>
        );
    }
}

export default NavBar; 