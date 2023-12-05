import React, { useContext, useState } from 'react'

import Style from "./Filter.module.css"
import Image from 'next/image'
import images from "../../assets"
import { EtherTalkContext } from '../../context/EthertalkContext'
import {Modal} from "../index"

const Filter = () => {
  const {account, addFriends} = useContext(EtherTalkContext);

  const [addFriend, setAddFriend] = useState("")

  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search } alt="search" width={20} height={20}/>
            <input  type='text' placeholder='search'/>
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt='clear' width={20} height={20}/>
            CLEAR CHAT
          </button>
          <button onClick={() => setAddFriend(true)}>
            <Image src={images.user} alt='clear' width={20} height={20}/>
            ADD FRIEND
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {addFriend && (
        <div className={Style.Filter_modal}>
          <Modal 
          openBox={setAddFriend}
          title="WELCOME TO"
          head="ETJ"s
           info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis numquam quibusdam in dicta, consectetur cumque fugiat qui vel doloremque pariatur."
           smallInfo="Kindly Select your friend name and address" 
           functionName={addFriends}
           image={images.hero}
          />
        </div>
      )}
    </div>
  )
}

export default Filter 