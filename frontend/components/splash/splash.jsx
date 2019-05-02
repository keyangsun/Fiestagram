import React from 'react';
import SignupFormContainer from '../session/signup_form_container';

const Splash = () => {
   return( 
       <div className='splash-main'>
            <div className='splash-left'>
            </div>
            <div className='splash-photo'>
                <img src='/images/splash_img.png' id='splash-bottom'/>
                <img src="/images/splash_img1.jpg" id="splash-middle"/>
                <img src="/images/splash_img2.jpg" id="splash-top"/>
            </div>
           <SignupFormContainer id='splash-form'/> 
           <div className='splash-right'>
           </div>
       </div>
    );
};

export default Splash; 