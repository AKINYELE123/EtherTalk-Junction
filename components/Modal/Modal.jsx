import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Style from "./Modal.module.css"

import images from "../../assets";
import { EtherTalkContext } from '../../context/EthertalkContext';
import { Loader } from "../../components/index"

const Modal = ({ openBox, title, head, info, functionName, image, smallInfo, address }) => {

  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");

  const {loading} = useContext(EtherTalkContext);

  console.log(name)

  return (
    <div className={Style.Modal}>
      <div className={Style.Modal_box}>
        <div className={Style.Modal_box_left}>
          <Image src={image} alt='buddy' width={700} height={700} />
        </div>
        <div className={Style.Modal_box_left}>
          <h1>
            {title} <span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{smallInfo}</small>

          {
            loading == true ? (
              <Loader />
            ) : (
              <div className={Style.Modal_box_right_name}>
                <div className={Style.Modal_box_right_name_info}>
                  <Image src={images.username} alt='user' width={30} height={30} />
                  <input type='text' placeholder='your name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={Style.Modal_box_right_name_info}>
                  <Image src={images.account} alt='user' width={30} height={30} />
                  <input type='text' placeholder={address || "Enter Address ...."} onChange={(e) => setAccountAddress(e.target.value)} />
                </div>


                <div className={Style.Modal_box_right_name_btn}>
                  <button
                    onClick={() => functionName({ name, accountAddress })}
                  >
                    {""}
                    <Image src={images.send} alt="send" width={30} height={30} />
                    {""}
                    Submit
                  </button>
                  <button
                    onClick={() => openBox(false)}
                  >
                    {""}
                    <Image src={images.send} alt="send" width={30} height={30} />
                    {""}
                    Cancel
                  </button>
                </div>
              </div>
            )
          }


        </div>
      </div>
    </div>
  )
}

export default Modal