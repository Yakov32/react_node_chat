import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from '../../assets/images/login.svg';
//import AuthService from './../../services/authService';
import {useDispatch} from 'react-redux';
import {login} from './../../store/actions/auth';
//import {useNavigate} from 'react-router-dom';

import './auth.scss'


const Login = ({history}) => {

   const dispatch = useDispatch();
   //const navigate = useNavigate();

   const [email = '', setEmail] = useState();
   const [password = '', setPassword] = useState();

   const submitForm = (e) => {
      e.preventDefault();
      dispatch(login({email, password}, history))
      // AuthService.login({password, email}).then(res => console.log(res)).catch(e => console.log('some error -- ', e.message));
      // const submitForm = (e) => {
      // e.preventDefault();
      // axios.post('http://127.0.0.1:3001/login', {password, email})
      // .then(res => console.log(res))
      // .catch(e => console.log('error -- ', e.message))
   // 
   }
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

                     <form onSubmit={submitForm}>
                        
                        <div className="input-field mb-1">
                           <input
                              onChange={e => setEmail(e.target.value)}
                              placeholder="Email"
                              required
                              type='text'
                              value={email}
                           />
                        </div>
                        <div className="input-field mb-2">
                           <input
                              onChange={e => setPassword(e.target.value)} 
                              placeholder="password"
                              required
                              type='password'
                              value={password}
                              />
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