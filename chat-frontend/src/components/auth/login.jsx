import React from "react";
import { Link } from "react-router-dom";
import loginImage from '../../assets/images/login.svg';

import './auth.scss'


const Login = () => {
   return (
      <h1>
         <div id='auth-container'>
            <div id='auth-card'>
               <div className="card-shadow">
                  <div id='image-section'>
                     <img src={loginImage} alt="login" />
                  </div>
                  <div id='form-section'>
                     <h2>Welcome back</h2>

                     <form action="">
                        <div className="input-field mb-1">
                           <input placeholder="Email"/>
                        </div>
                        <div className="input-field mb-2">
                           <input placeholder="Password"/>
                        </div>

                        <button>LOGIN</button>
                     </form>

                     <p>Dont have an account ? <Link to='/register'>Register</Link></p>
                  </div>
               </div>

            </div>

         </div>
      </h1>
   )
};

export default Login;