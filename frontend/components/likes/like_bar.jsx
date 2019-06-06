import React from 'react'; 

class LikeBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderHeart = this.renderHeart.bind(this);
        this.createLike = this.createLike.bind(this);
        this.removeLike = this.removeLike.bind(this); 
    }

    createLike() {
        this.props.createLike({
            post_id: this.props.postId 
        });
    }

    removeLike() {
        let { likes, currUser, removeLike } = this.props; 
        
        for(let i = 0; i < likes.length; i ++) {
            if ( likes[i].user_id === currUser ) {
                removeLike(likes[i]);
                return; 
            }
        }
    }

    renderHeart() {
        let { likers, currUser } = this.props; 
        return likers.includes(currUser) ? (
            <p onClick={this.removeLike}>liked</p>
        ) : (
            <p onClick={this.createLike}>not liked</p>
        ); 
    }

    render() {
        console.log(this.props);
        return(
            <>
            <p>I'm the like bar</p>
            {this.renderHeart()}
            <p>{this.props.likes.length}</p>
            </>
        );
    }
}

export default LikeBar; 