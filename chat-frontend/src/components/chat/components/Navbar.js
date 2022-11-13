import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../../../store/actions/auth";

import './Navbar.scss';


const Navbar = ({history}) => {

   const user = useSelector(state => state.authReducer.user);
   const [showProfileOptions, setProfileOptions] = useState(false);
   const dispatch = useDispatch();
   
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
                  <p>Update file</p>
                  <p onClick={logout}>Logout</p>
               </div>
            }
         </div>
      </div>
   );
};


export default Navbar;