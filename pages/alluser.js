import React, { useContext } from 'react'
import Style from "../styles/alluser.module.css";
import { EtherTalkContext } from '../context/EthertalkContext';
import UserCard from '../components/UserCard/UserCard';

const alluser = () => {
    const { userLists,  addFriends}  = useContext(EtherTalkContext)

    console.log("userList", userLists)
    return (
        <div>
        <div className={Style.alluser_info}>
            <h1>Find Your Friends </h1>
        </div>

        <div div className={Style.alluser}>
            {userLists && userLists.map((el, i) => (
                <UserCard key={i + 1} el={el} i={i} addFriends={addFriends}/>
            ))}
        </div>
    </div>
    )
}

export default alluser