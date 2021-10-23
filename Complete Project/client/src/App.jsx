import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

// import ChannelListContainer from './component/ChannelListContainer';
// import ChannelContainer from './component/ChannelContainer';

import { ChannelListContainer, ChannelContainer } from './component';

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









