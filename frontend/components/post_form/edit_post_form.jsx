import React from 'react';
import { connect } from 'react-redux'; 
import { removePostErrors } from '../../actions/post_actions'; 

class EditPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.post.id,
            location: this.props.post.location,
            caption: this.props.post.caption
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.closePostForm = this.closePostForm.bind(this);
    }

    handleUpdate() {
        this.props.updatePost(this.state)
            .then( () => {
                this.props.closeModal(null);
            });
    }

    handleChange(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            });
        };
    }

    closePostForm() {
        this.props.closeModal(null);
        this.props.removeErrors();
    }

    render() {
        const errors = ( this.props.postErrors.length === 0 ) ? (null) : (
            <ul>
                {this.props.postErrors.map( 
                    ( error, idx ) => <li key={idx}>{error}</li>)}
            </ul>
        );

        return(
            <div id='post-edit-form' className="show">
                <div className="post-edit-main">
                    <h2>Edit Post</h2>
                    <p>details</p>
                    <input type="text" 
                        placeholder='Edit the location'
                        onChange={this.handleChange('location')}
                        value={this.state.location}/>
                    <textarea onChange={this.handleChange('caption')}
                        placeholder='Edit the Caption'
                        value={this.state.caption}/>
                    <p className='edit-submit'
                        onClick={this.handleUpdate}>
                        Update
                    </p>
                    {errors}
                </div>

                <div className="modal-screen"
                    onClick={this.closePostForm}>
                </div>

            </div>
        );
    }
}

const mapSTP = state => ({
    postErrors: state.errors.posts
}); 

const mapDTP = dispatch => ({
    removeErrors: () => dispatch(removePostErrors())
});

export default connect(mapSTP, mapDTP)(EditPostForm);