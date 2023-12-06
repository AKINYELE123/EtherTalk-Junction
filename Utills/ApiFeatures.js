import { ethers } from "ethers";;
import Web3Modal from 'web3modal';

import {EtherTalkAddress, EtherTalkABI} from "../context/constant"

export const checkIfWalletConnected = async () => {
    try{
        if(!window.ethereum) return  console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    }catch (error) {
        console.log(error);
    }
};


export const connectWallet = async () =>  {
    try{
        if(!window.ethereum) return  console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    }catch (error) {
        console.log(error);
    }
}


const fetchContract = (signerOrOrProvider) =>  {
    return new ethers.Contract( EtherTalkAddress, EtherTalkABI, signerOrOrProvider);
};


export const connectingWithContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer =provider.getSigner();
        const contract = fetchContract(signer);

        return contract;
    }catch(error) {
        console.log(error);
    }
};

// export const convertTime = (time) => {
//     const newTime = new Date(time.toNumber());

//     const realTime = newTime.getHours() + 
//     "/" +
//     newTime.getMinutes() + 
//     "/" +
//     newTime.getSeconds() +
//     " Date" +
//     newTime.getDate() +
//     "/" +
//     (newTime.getMonth() + 1) +
//     "/" +
//     newTime.getFullYear();

//     return realTime;
// }

export const convertTime = (timestamp) => {
    // Convert the provided timestamp to milliseconds (if it's in seconds)
    const milliseconds = timestamp.toNumber() * 1000; // Assuming the timestamp is in seconds
  
    // Create a new Date object using the timestamp in milliseconds
    const newTime = new Date(milliseconds);
  
    // Use Date methods to extract individual date and time components
    const hours = newTime.getHours().toString().padStart(2, '0'); // Ensure two digits for hours
    const minutes = newTime.getMinutes().toString().padStart(2, '0'); // Ensure two digits for minutes
    const seconds = newTime.getSeconds().toString().padStart(2, '0'); // Ensure two digits for seconds
    const day = newTime.getDate().toString().padStart(2, '0'); // Ensure two digits for day
    const month = (newTime.getMonth() + 1).toString().padStart(2, '0'); // Ensure two digits for month
    const year = newTime.getFullYear();
  
    // Construct the formatted date and time string
    const formattedTime = `${hours}:${minutes}:${seconds} Date: ${day}/${month}/${year}`;

    const realTime = formattedTime; 
  
    return realTime;
  };
  