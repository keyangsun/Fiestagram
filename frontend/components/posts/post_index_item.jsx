import React from 'react';

const PostIndexItem = (props) => { 
    return(
        <div className='post-item'>
            <header>
                <img src={props.user.profilePhoto}/>
                <p>{props.user.username}</p>
            </header>
            <div className='post-img'>
                <img src={props.post.photoUrl}/>
            </div>
            <div className="post-bottom">
                <section>I'm the section</section>
            </div>
        </div>
    );
}; 

export default PostIndexItem; 