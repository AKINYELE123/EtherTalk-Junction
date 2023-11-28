import React, { useContext, useState } from 'react'
import Style from "./NavBar.module.css"
import Image from 'next/image';
import Link from 'next/link'

import { EtherTalkContext} from "../../context/EthertalkContext";
import  { Error, Modal } from "../index";
import images from "../../assets/index"

const NavBar = () => {

  const menuItems = [
    {
      menu: "All Users",
      link: "alluser",
    },
    {
      menu: "Chat",
      link: "/",
    },
    {
      menu: "CONTACT",
      link: "/",
    },
    {
      menu: "FAQS",
      link: "/",
    },
    {
      menu: "TERMS OF USE",
      link: "/",
    },
  ];

  

  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet, createAccount, error } = useContext(EtherTalkContext);
  console.log(userName);
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* <Image src={images.logo} alt="logo" width={50} height={50} /> */}
          {userName}
        </div>
        <div className={Style.NavBar_box_right}>
          {/* Desktop */}
          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((el, i) => (
              <div onClick={() => setActive(i + 1)} key={i + 1} className={`${Style.NavBar_box_right_menu_item} ${active == i + 1 ? Style.active_btn : "" }`}>
                <Link className={Style.NavBar_box_right_menu_item_link} 
                href={el.link}>
                {el.menu}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile */}

          {open && (
             <div className={Style.mobile_menu}> 
             {menuItems.map((el, i) => (
               <div onClick={() => setActive(i + 1)} key={i + 1} className={`${Style.mobile_menu_item} ${active == i + 1 ? Style.active_btn : "" }`}>
                 <Link className={Style.mobile_menu_item_link} 
                 href={el.link}>
                 {el.menu}
                 </Link>
               </div>
             ))}

             <p className={Style.mobile_menu_btn}>
              <Image src={images.close} alt='close' width={50} height={50}  onClick={() => setOpen(false)}/>
             </p>
           </div>
          )}


          {/* Connect Wallet */}


          <div className={Style.NavBar_box_right_connect}> 
            {account == "" ? (
              <button onClick={() => connectWallet()}>
                {""}
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button onClick={()=> setOpenModel(true)}>
                {""}
                <Image  src={userName ? images.accountName : images.create2} alt='Account image' width={20} height={20}/>
                {""}
                <small>{userName ? userName : "Create Account"}</small>
              </button>
            )}
          </div>
          <div className={Style.NavBar_box_right_open} onClick={() => setOpen(true)}>
            <Image src={images.open} alt='open' width={30} height={30}/>
          </div>
        </div>
      </div>


      {/* MODEL COMPONENT */}

      {openModel && (
        <div className={Style.modelBox}>
          <Modal
           openBox={setOpenModel}
          title="WELCOME TO"
          head="ETHER TALK JUNCTION (E.T.J)"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae soluta sed optio magni commodi! Ipsa eum pariatur reprehenderit distinctio natus?"
          smallInfo="kindly Select your name"
          image={images.hero}
          functionName={createAccount}
          address={account}
          />
        </div>
      )}
      {!error == "" ? "" : <Error error={error}/>}
    </div>
  )
}

export default NavBar 