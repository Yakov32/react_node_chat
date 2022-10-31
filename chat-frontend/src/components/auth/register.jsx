import React from "react";
import registerImage from './../../assets/images/register.svg';
import { Link } from 'react-router-dom';


const Register = () => {
   return (
      <h1>
         <div id='auth-container'>
            <div id='auth-card'>
               <div className="card-shadow">
                  <div id='image-section'>
                     <img src={registerImage} alt="register" />
                  </div>
                  <div id='form-section'>
                     <h2>Welcome back</h2>

                     <form action="">
                        <div className="input-field mb-1">
                           <input placeholder="First name"/>
                        </div>
                        <div className="input-field mb-1">
                           <input placeholder="Last name"/>
                        </div>
                        <div className="input-field mb-1">
                           <input placeholder="Email"/>
                        </div>
                        <div className="input-field mb-1">
                           <select name="gender" id="">
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                           </select>
                        </div>
                        
                        <div className="input-field mb-2">
                           <input placeholder="Password"/>
                        </div>

                        <button>REGISTER</button>
                     </form>

                     <p>Already have an account ? <Link to='/login'>Login</Link></p>
                  </div>
               </div>

            </div>

         </div>
      </h1>
   )
};

export default Register;