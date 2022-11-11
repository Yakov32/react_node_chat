import React from "react";

import { useSelector } from "react-redux";


const Chat = () => {
   let state = useSelector(state => state);
   console.log('State --- ', state);
   const username = state.authReducer.user.email;
   return (
      <div>
         <h1>Chat Component</h1>
         <h2>Hello, {username}</h2>
      </div>
   )
};

export default Chat;