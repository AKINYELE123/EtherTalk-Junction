import React, { useContext } from 'react'

import { ChatAppContect } from '../context/ChapAppContext'

const ChatApp = () => {
  const {title} = useContext(ChatAppContect);
  return 
    <div>{title}</div>
  
}

export default ChatApp