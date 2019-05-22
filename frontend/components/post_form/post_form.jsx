import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value 
            });
        };
    }

    handlePhoto(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photo: file, preview: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    closeModal() {
        this.setState({
            location: '',
            caption: '',
            photo: null,
            preview: null
        });
        document.getElementById('postform').className = 'hide';
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const formData = new FormData(); 
        formData.append('post[location]', this.state.location);
        formData.append('post[caption]', this.state.caption);
        formData.append('post[photo]', this.state.photo); 
        this.props.action(formData)
            .then( () => {
                this.setState({
                    location: '',
                    caption: '',
                    photo: null,
                    preview: null});
                    document.getElementById('postform').className = 'hide';  
                }
            ); 
    }

    renderForm() {
        const errorsmsg = this.props.errors ? (
            <ul className="errors">
                {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
            ) : (
            <></>
        ); 

        if (this.state.photo === null) {
            return (
                <div className="upload-window">
                    <img src="/images/cloud_upload.svg"
                        className="upload-logo"/>
                    <h3>Upload a Photo</h3>
                    <div className="upload-msg">
                        <p>Share photos that you'd like your friends to see</p>
                    </div>
                    <label>
                        <p>Upload</p>
                        <input type="file"
                            accept="image/*"
                            onChange={this.handlePhoto} />
                    </label>
                </div> 
            );
        } else {
            return(
                <div className="upload-window">
                    <div className="upload-form">
                    
                        <div className="preview">
                            <img src={this.state.preview} />
                        </div>

                        <div className="user-inputs">

                            <p className="title">New Fiestgram Post</p>
                            <p className="subtitle">Details</p>
                            
                            <textarea
                                value={this.state.caption}
                                placeholder="Write a caption..."
                                onChange={this.handleInput('caption')} />
                            <input type="text"
                                value={this.state.location}
                                placeholder="Add location"
                                onChange={this.handleInput('location')} />  
                            <p onClick={this.handleSubmit}
                                className="submit-button">
                                Post
                            </p> 

                            {errorsmsg}    
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {

        return(
            <div id="postform" className='hide'>

                {this.renderForm()}

                <div className="modal-screen"
                    onClick={this.closeModal}>
                </div>

            </div>
        );
    }
}

export default PostForm;