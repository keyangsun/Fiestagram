import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <>
                <NavBarContainer/>
                <p>I'm the profile page</p>
            </>
        );
    }
}

export default Profile;