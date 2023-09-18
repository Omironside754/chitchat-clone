import React from 'react'
import { Avatar } from '@mui/material';
import { useState, useEffect } from 'react';
import { AttachFile } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import "./Chat.css";
import { db } from './Firebase.js';
import { onValue, ref, set, push } from 'firebase/database';
import snapshot from 'snapshot';


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);


    const [posts, setPosts] = useState([]);

    // const Push = () => {
    //     db.ref("/posts").set({
    //         name: "OM",
    //         chat: {input},
    //     }).then(()=>{console.log("set:"+{input})});
    // }
    const Push = () => {
        set(push(ref(db, 'users/')), {
            name: 'OM',
            chat: input
        });

    }

    var p1 = [];
    useEffect(() => {
        const query = ref(db, "users/");
        return onValue(query, (snapshot) => {



            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                p1.push(childData);
                console.log(p1)

                // setPosts([...posts, childData])
            })

            setPosts(p1);
        })



        //     (snapshot) => {
        //     const data = snapshot.val();

        //     if (snapshot.exists()) {
        //         // snapshot.val().map((post) => {
        //         //     setPosts((post) => [...post, post]);
        //         // });
        //         console.log(snapshot.child("chat").val());
        //     }
        // });
    }, []);


    return (
        <div className='Chat'>
            <div className="Chat_Header">
                <Avatar src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}`} />

                <div className="Chat_HeaderInfo">
                    <h3>Room name</h3>
                    <p>last seen at...</p>
                </div>
                <div className="Chat_HeaderRight">
                    <IconButton>
                        < SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        < AttachFile />
                    </IconButton>
                    <IconButton>
                        < MoreVertIcon />
                    </IconButton>


                </div>
            </div>
            <div className="Chat_Body">

                {posts.map((post) => {

                    return (

                        <p className={`Chat_msg  ${true && "chat_reciever"}`}>

                            <span className='ChatName'>
                                {post.name}
                            </span>
                            {post.chat}

                            <span className="Chat_timestamp">
                                3:52pm
                            </span>
                        </p>

                    )
                })}



            </div>
            <div className="Chat_Footer">
                <IconButton><EmojiEmotionsIcon /></IconButton>

                <form>
                    <input value={input} type='text' onChange={e => setInput(e.target.value)} placeholder="type a message" />
                    <button onClick={Push} type='submit'>send a message</button>
                </form>

                <IconButton><MicIcon /></IconButton>

            </div>

        </div>
    )
}

export default Chat