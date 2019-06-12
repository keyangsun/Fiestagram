import React from 'react';
import SignupFormContainer from '../session/signup_form_container';

const Splash = () => {
   return( 
       <>
       <div className='splash-main'>
            <div className='splash-left'></div>
            <div className='splash-photo'>
                <img src='/images/splash_img.png' id='splash-bottom'/>
                <img src="/images/splash_img1.jpg" id="splash-middle"/>
                <img src="/images/splash_img2.jpg" id="splash-top"/>
            </div>
           <SignupFormContainer id='splash-form'/> 
           <div className='splash-right'></div>
       </div>
        <div className="footer">
            <a href="https://keyangsun.com">ABOUT ME</a>
            <a href="https://github.com/keyangsun">GITHUB</a>
            <a href="https://www.linkedin.com/in/keyangsun/">LINKEDIN</a>
            <p>@2019 FIESTAGRAM</p>
        </div>
       </>
    );
};

export default Splash; 