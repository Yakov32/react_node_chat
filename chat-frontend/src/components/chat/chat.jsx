import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

import './Chat.scss';

const Chat = () => {
   let state = useSelector(state => state);
   console.log('State --- ', state);
   return (
      <div id='chat-container'>
         <Navbar />
         <div id='chat-wrap'></div>
      </div>
   )
};

export default Chat;