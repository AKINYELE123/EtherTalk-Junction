import React, {useState, useEffect} from 'react'


import { checkIfWalletConnected, connectWallet, connectingWithContract } from '../Utills/ApiFeatures'


export const ChatAppContect = React.createContext();

export const ChatAppProvider = ({children }) => {
    const title = "Hey Welcome to Blockchain Chat App";

    return(
        <ChatAppContect.Provider value={{title}}>
            {children}
        </ChatAppContect.Provider>
    )
}

