import React from 'react';

const PostIndexItem = (props) => { 
    console.log(props);
    return(
        <div className='post-item'>
            <header>I'm the header</header>
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