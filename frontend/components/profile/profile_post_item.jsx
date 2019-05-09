import React from 'react'; 

class ProfilePostItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src={this.props.post.photoUrl}/>
            </div>
        );
    }
}

export default ProfilePostItem;