import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    handleCreate() {
        document.getElementById('postform').className = 'show';
    }

    render() {
        return (
            <div id="navbar" className="navbar navbar-top">
                <div className="nav-index">
                    <Link to="/home"> 
                        <i className="fab fa-instagram"></i>
                        <h3 id="nav-logo" className="logo">Fiestagram</h3>
                    </Link>
                </div>
                <div className="nav-menu">
                    <div className="create-post-button"
                        onClick={this.handleCreate}>
                        <img src="/images/create_post.png"/>
                    </div>
                    <div className="profile-button">
                        <Link to={`/profile/${this.props.user.id}`}>
                            <img src="/images/profile.png"/>
                        </Link>
                    </div>
                    <div onClick={this.handleLogout}
                        className="logout-button">
                        <p>LOG OUT</p>
                    </div>
                </div>
            </div>  
        );
    }
}

export default NavBar; 