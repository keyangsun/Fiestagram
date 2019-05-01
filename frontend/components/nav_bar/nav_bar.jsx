import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }

    render() {
        // logout logic here: 
        return (
            <>
                <h2>Nav bar here</h2>
                <button onClick={this.props.logout}>Log Out</button>
            </>
        );
    }
}

export default NavBar; 