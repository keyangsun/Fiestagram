import React from 'react';

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
    }

    handleUpdate() {
        this.props.updatePost(this.state);
        this.props.closeModal(null);
    }

    handleChange(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            });
        };
    }

    render() {
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
                </div>

                <div className="modal-screen"
                    onClick={() => this.props.closeModal(null)}>
                </div>

            </div>
        );
    }
}

export default EditPostForm;