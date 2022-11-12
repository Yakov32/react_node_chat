import React from 'react';
import {useState} from 'react';
import registerImage from './../../assets/images/register.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth';


const Register = ({history}) => {

   const dispatch = useDispatch();
   //const navigate = useNavigate();

   const [firstName = '', setFirstName] = useState();
   const [lastName = '', setLastName] = useState();
   const [email = '', setEmail] = useState();
   const [password = '', setPassword] = useState();
   const [gender = '', setGender] = useState('male');

   const submitForm = (e) => {
      e.preventDefault();
      console.log({email, password, firstName, lastName, gender})
      dispatch(register({email, password, firstName, lastName, gender}, history))
   }

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

                     <form onSubmit={submitForm}>
                        <div className="input-field mb-1">
                           <input 
                           onChange={e => setFirstName(e.target.value)}
                           placeholder="First name"
                           required="required"
                           value={firstName}
                           />
                        </div>
                        <div className="input-field mb-1">
                        <input 
                           onChange={e => setLastName(e.target.value)}
                           placeholder="Last name"
                           required="required"
                           value={lastName}
                           />
                        </div>
                        <div className="input-field mb-1">
                        <input 
                           onChange={e =>setEmail(e.target.value)}
                           placeholder="Email"
                           type='Email'
                           required="required"
                           value={email}
                           />
                        </div>
                        <div className="input-field mb-1">
                           <select 
                           name="gender" 
                           id=""
                           onChange={e => setGender(e.target.value)}
                           required="required"
                           value={gender}
                           >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                           </select>
                        </div>
                        
                        <div className="input-field mb-2">
                        <input 
                           onChange={e =>setPassword(e.target.value)}
                           placeholder="Password"
                           required="required"
                           value={password}
                           />
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