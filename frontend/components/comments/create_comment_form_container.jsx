import React from 'react'; 
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions'; 

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: this.props.postId,
            content: ''
        };
        this.renderbutton = this.renderbutton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        this.props.createComment(this.state);
        this.setState({
            content: ''
        });
    }

    renderbutton() {
        return this.state.content === '' ? (
            <p className="fake-comment-button">
                Post
            </p>
        ) : (
            <p onClick={this.handleSubmit}
                className="real-comment-button">
                Post
            </p>
        );
    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        return(
            <div className="comment-box">
                <textarea 
                    placeholder="Add a comment ..."
                    onChange={this.handleChange}
                    value={this.state.content}/>
                {this.renderbutton()}
            </div>
        );  
    }
}

const mapDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(null, mapDTP)(CreateCommentForm);



