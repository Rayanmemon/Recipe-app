import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Backend/firebaseConfig';
//import googlelogo from './assets/googleicon.svg'
import logo from '../assets/logo2.png'
import './Login.css'

const Login = () => {


   function Googlelogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(async (result) => {
          if (result.user) {
           /*  const email = result.user.email; */

            /* if (email) { */
                window.location.href = '/Home';
              /* } */
          }
      }).catch((error) => {
          console.error("Error during sign-in: ", error);
      });
  } 


      /* function Googlelogin(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            
        })
      } */



  return(
    <>
    <div className="bg">
        <div className="box-wrapper">
            <div className="box">
                <div className="box-header">
                    <div className="Logo-box">
                        <img src={logo} alt='logo'></img>
                    </div>
                    <div className="quote-box">
                        <p>A place to share and learn better understand recipes</p>
                    </div>
                </div>
                <div className="box-body">
                    <div className="border-line">
                        <div className="login-txt">
                            <p>Login</p>                           
                        </div>
                    </div>

                    <div className="login-box">
                    <button className="login-button" onClick={Googlelogin}>
                            <div className="login-outer">
                                <div className='login-inner'>
                                    <img className='gsvg'  src="/assets/googleIcon.svg" alt="Google img" />
                                        <div className="login-text-inner">
                                        Continue with Google
                                        </div>
                                </div>
                                
                                
                            </div>
                        </button>
                    </div>
                </div>
                <div className="box-footer">
                    <div className=""></div>
                </div>
            </div>
        </div>
    </div> 
    

    
      </>
  );
}


export default Login
