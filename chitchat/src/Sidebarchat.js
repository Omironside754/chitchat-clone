import React from 'react'
import './Sidebarchat.css'; 

import { Avatar } from '@mui/material';
import { useState, useEffect } from 'react';


function Sidebarchat({addNewChat  , id, name}) {

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, []);

  const createChat =() =>
  {
    const roomName = prompt("please enter the name for chat room");
    if(roomName){
      //we'll do some database stuff here ....
      
    }
  };
  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}`} />
      <div className='sidebarchat__info'>
        <h1> {name}</h1>
        <p>last message...</p>
      </div>
    </div>
  ):
  (
    <div onClick = {createChat}
    className="sidebarChat">
      <h2>Add new chat </h2>
    </div>
  )
}

export default Sidebarchat;
