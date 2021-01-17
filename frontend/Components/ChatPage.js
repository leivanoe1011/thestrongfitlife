

import React, { useState, useContext, useEffect, useRef } from 'react';

import { AuthContext } from "../Context/AuthContext";

function Chat () {

    const chatroomId = match.params.id;

    const { socket } = useContext(AuthContext);

    // Instantiate Array
    const [messages, setMessages] = useState([]);

    const messageRef = useRef();


    const sendMessage = () => {
        if (socket) {
          socket.emit("chatroomMessage", {
            chatroomId,
            message: messageRef.current.value,
          });
    
          messageRef.current.value = "";
        }
    };


    // Listen to new Messages
    useEffect( () => {
        
        if (token) {
            const payload = JSON.parse(atob(token.split(".")[1]));
            setUserId(payload.id);
        }

        if(socket){
            socket.on("newMessage",(message) =>{
                const newMessage = [...messages,message];
                setMessages(newMessage);
            })
        }

    //eslint-disable-next-line
    }, [messages]);





}
  


export default Chat;



