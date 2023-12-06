import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { checkIfWalletConnected, connectWallet, connectingWithContract } from '../Utills/ApiFeatures';

export const EtherTalkContext = React.createContext();

export const EthertalkProvider = ({ children }) => {

    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendList, setFriendList] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    // CHAT USER DATA

    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    // Fecth Data time of page Load 

    console.log(userName)

    const fetchData = async () => {
        try {
            // Get Contract
            const contract = await connectingWithContract();
            // GET ACCOUNT
            const connectAccount = await connectWallet();
            setAccount(connectAccount);
            // // GET USERNAME
            const userName = await contract.getUsername(connectAccount);
            setUserName(userName);
            // GET MY FRIEND LIST
            const friendList = await contract.getMyFriendList();
            setFriendList(friendList);
            // GET ALL APP USER LIST
            const userList = await contract.getAllAppUser();
            setUserLists(userList);
        } catch (error) {
            // setError("Please Install and Connect your wallet")
        }
    };;

    useEffect(() => {
        fetchData();
    }, []);


    // Read Message

    const readMessage = async (friendAddress) => {
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            console.log("Currently You Have no Message")
        }
    };

    // CREATE ACCOUNT

    const createAccount = async ({ name, accountAddress }) => {
        try {
            // if (name || accountAddress)
            //     return setError("Name and AccountAddress, cannot be Empty");

            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Error while Creating your Account Please reload the browser")
        }
    };

    // ADD FRIENDS

    const addFriends = async ({ name, accountAddress }) => {
        try {
            // if (name || accountAddress) return setError("Please provide");

            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push('/');
            window.location.reload();
        } catch (error) {
            console.log("Something went Wrrong while adding Friends, try again")
        }
    };

    // SEND MESSAGE TO FRIEND

    const sendMessage = async ({ msg, address }) => {
        try {

            // if (msg || address) return setError("Please type your message");
            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();

        } catch (error) {
            setError("Please reload and try again")
        }
    }


    // Read INFO

    const readUser = async (userAddress) => {
        try {
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    } catch (err) {
        console.log(err);
      }
    }

    return (
        <EtherTalkContext.Provider value={{
            readMessage,
            createAccount,
            addFriends,
            sendMessage,
            readUser,
            connectWallet,
            checkIfWalletConnected,
            account,
            userName,
            friendList,
            friendMsg,
            userLists,
            loading,
            error,
            currentUserName,
            currentUserAddress
        }}>
            {children}
        </EtherTalkContext.Provider>
    )
} 