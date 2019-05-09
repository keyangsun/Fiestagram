import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {

    constructor(props) {
        super(props);     
    }

    render() {
        let { comments, removeComment } = this.props; 

        return(
            <ul>
                {
                  comments.map( (comment, idx) => 
                    <CommentIndexItemContainer 
                        key={idx}
                        comment={comment} 
                        removeComment={removeComment}/> )  
                }
            </ul>
        );
    }
}

export default CommentIndex;