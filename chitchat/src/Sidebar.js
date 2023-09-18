import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Sidebar.css";
import Sidebarchat from './Sidebarchat';
import {db}from "./Firebase"


function Sidebar() {
    const [rooms , setRooms] = useState([]); 
//const [rooms, setRooms] = useState([]);


       return (
           <div className="sidebar">
   
               <div className="sidebar__header">
                   <IconButton>
                       <Avatar />
   
                   </IconButton>
                   <div className="sidebar__headerRight">
                       <IconButton>
                           < DonutLargeIcon />
                       </IconButton>
                       <IconButton>
                           < ChatIcon />
                       </IconButton>
                       <IconButton>
                           < MoreVertIcon />
                       </IconButton>
   
   
                   </div>
               </div>
               <div className="sidebar__search">
                   <div className='sidebar__searchContainer'>
                       <SearchOutlinedIcon />
                       <input placeholder='search or start new chat' type="text" />
                   </div>
   
               </div>
               <div className="sidebar__chat">
                   <Sidebarchat addNewChat />
                   {rooms.map(room =>(
                       <Sidebarchat key ={room.id} id={room.id} 
                       name = {room.data.name}/>
                   ))}
   
               </div>
           </div>
       )
   }
   export default Sidebar;