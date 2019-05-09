import React from 'react';

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user } = this.props; 
 
        return(
            <section className="profile-header">
                <img src={user.profilePhoto}/>
                <div>
                    <h2>{user.username}</h2>
                    <p><strong>{user.postIds.length}</strong>  posts</p>
                    <p>{user.bio}</p>
                </div>
            </section>
        );  
    }
}

export default ProfileHeader;