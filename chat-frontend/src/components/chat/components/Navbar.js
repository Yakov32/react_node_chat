import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../../../store/actions/auth";
import Modal from './../../modal/Modal';
import { Fragment } from "react";

import './Navbar.scss';


const Navbar = ({history}) => {

   const dispatch = useDispatch();
   const user = useSelector(state => state.authReducer.user);

   const [showProfileOptions, setProfileOptions] = useState(false);
   const [showProfileModal, setProfileModal] = useState(false);
   
   const [firstName = '', setFirstName] = useState(user.firstName);
   const [lastName = '', setLastName] = useState(user.lastName);
   const [email = '', setEmail] = useState(user.email);
   const [password = '', setPassword] = useState();
   const [gender = '', setGender] = useState(user.gender);
   const [avatar = '', setAvatar] = useState();

   const submitForm = (e) => {
      e.preventDefault();

      const form = {firstName, lastName, email, password, gender, avatar};
      const formData = new FormData();

      for(const key in form){
         formData.append(key, form[key]);
      }
      
      //dispatch
      console.log('Update profile dispatch mock ----', form);
   }


   const logout = (e) => {
      dispatch(logoutAction(history));
   }

   
   return (
      <div id='navbar' className="card-shadow">
         <h2>Chat.io!!</h2>
         <div onClick={() => {setProfileOptions(!showProfileOptions)}} id='profile-menu'>
            <img width='40' height='40' src={user.avatar} alt='avatar'/>
            <p>{user.firstName} {user.lastName}</p>
            <FontAwesomeIcon icon='caret-down' className="fa-icon"/>

            {
               showProfileOptions &&
               <div id='profile-options'>
                  <p onClick={() => {setProfileModal(true)}}>Update profile</p>
                  <p onClick={logout}>Logout</p>
               </div>
            }

            {  
               showProfileModal &&
               <Modal click={() => {setProfileModal(false)}}>
                  <Fragment key='header'>
                     <h3 className="m-0">Udpate profile</h3>
                  </Fragment >
                  <Fragment key='body'>
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

                        <div className="input-field mb-2">
                        <input 
                           onChange={e => setAvatar(e.target.files[0])}
                           type='file'
                           placeholder="Avatar"
                           />
                        </div>
                  </Fragment>
                  <Fragment key='footer'>
                     <button className="btn-success" onClick={submitForm}>UPDATE</button>
                  </Fragment >
               </Modal>
            }
         </div>
      </div>
   );
};


export default Navbar;