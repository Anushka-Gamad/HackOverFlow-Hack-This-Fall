import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apiKey = 'pudxvmxctfxa';

const client = StreamChat.getInstance(apiKey); 

const App = () => {
  return (
    <div className = "app__wrapper">
    <Chat client= {client} theme="team light"> 
    <ChannellistContainer/>  
    <ChannelContainer/>  
      
    </Chat> 
    </div>
  )
}

export default App









