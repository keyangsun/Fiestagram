import React from 'react'; 

class LikeBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderheart = this.renderheart.bind(this);
    }

    renderheart() {
        let { likers, currUser } = this.props; 
        return likers.includes(currUser) ? (
            <p>liked</p>
        ) : (
            <p>not liked</p>
        ); 
    }

    render() {
        return(
            <>
            <p>I'm the like bar</p>
            {this.renderheart()}
            <p>{this.props.likers.length}</p>
            </>
        );
    }
}

export default LikeBar; 