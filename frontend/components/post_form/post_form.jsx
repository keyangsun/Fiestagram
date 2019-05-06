import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            caption: '',
            photo: null,
            preview: null
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
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
        document.getElementById('postform').className = 'hide';
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const formData = new FormData(); 
        formData.append('post[location]', this.state.location);
        formData.append('post[caption]', this.state.caption);
        formData.append('post[photo]', this.state.photo); 
        this.props.createPost(formData)
            .then( () => {
                this.setState({
                    location: '',
                    caption: '',
                    photo: null,
                    preview: null});
                document.getElementById('postform').className = 'hide';    
            }); 
    }

    render() {
        const imgPreview = this.state.preview ? (
            <div className="preview">
                <img src={this.state.preview}/>
            </div>
        ) : (
            <div className="preview">
                <img src='/images/preview.png'/>
            </div>
        ); 

        const errorsmsg = this.props.errors ? (
            <ul className="errors">
                {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
        ) : (
            <></>
        ); 

        return(
            <div id="postform" className='hide'>
                <form className="modal-form">
                    {imgPreview}
                    <input type="text" 
                        value={this.state.location}
                        placeholder="Location"
                        onChange={this.handleInput('location')}/>
                    <textarea 
                        value={this.state.caption}
                        placeholder="Caption"
                        onChange={this.handleInput('caption')}/>
                    <label>photo
                        <input type="file"
                            onChange={this.handlePhoto}/>
                    </label>
                    <button onClick={this.handleSubmit}>make a post</button>
                    {errorsmsg}
                </form>
                <div className="modal-screen"
                    onClick={this.closeModal}>
                </div>
            </div>
        );
    }
}

export default PostForm;