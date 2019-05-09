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
            <p>Post</p>
        ) : (
            <p onClick={this.handleSubmit}>
                Post actually
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
            <div>
                <textarea 
                    onChange={this.handleChange}
                    value={this.state.content}/>
                {this.renderbutton()};
            </div>
        );  
    }
}

const mapDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(null, mapDTP)(CreateCommentForm);



