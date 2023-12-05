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
  // return (
  //   <div className={Style.NavBar}>
  //     <div className={Style.NavBar_box}>
  //       <div className={Style.NavBar_box_left}>
  //         <Image src={images.logo} alt="logo" width={50} height={50} />
  //       </div>
  //       <div className={Style.NavBar_box_right}>
  //         {/* Desktop */}
  //         <div className={Style.NavBar_box_right_menu}>
  //           {menuItems.map((el, i) => (
  //             <div onClick={() => setActive(i + 1)} key={i + 1} className={`${Style.NavBar_box_right_menu_item} ${active == i + 1 ? Style.active_btn : "" }`}>
  //               <Link className={Style.NavBar_box_right_menu_item_link} 
  //               href={el.link}>
  //               {el.menu}
  //               </Link>
  //             </div>
  //           ))}
  //         </div>

  //         {/* Mobile */}

  //         {open && (
  //            <div className={Style.mobile_menu}> 
  //            {menuItems.map((el, i) => (
  //              <div onClick={() => setActive(i + 1)} key={i + 1} className={`${Style.mobile_menu_item} ${active == i + 1 ? Style.active_btn : "" }`}>
  //                <Link className={Style.mobile_menu_item_link} 
  //                href={el.link}>
  //                {el.menu}
  //                </Link>
  //              </div>
  //            ))}

  //            <p className={Style.mobile_menu_btn}>
  //             <Image src={images.close} alt='close' width={50} height={50}  onClick={() => setOpen(false)}/>
  //            </p>
  //          </div>
  //         )}


  //         {/* Connect Wallet */}


  //         <div className={Style.NavBar_box_right_connect}> 
  //           {account == "" ? (
  //             <button onClick={() => connectWallet()}>
  //               {""}
  //               <span>Connect Wallet</span>
  //             </button>
  //           ) : (
  //             <button onClick={()=> setOpenModel(true)}>
  //               {""}
  //               <Image  src={userName ? images.accountName : images.create2} alt='Account image' width={20} height={20}/>
  //               {""}
  //               <small>{ userName || "Create Account"}</small>
  //             </button>
  //           )}
  //         </div>
  //         <div className={Style.NavBar_box_right_open} onClick={() => setOpen(true)}>
  //           <Image src={images.open} alt='open' width={30} height={30}/>
  //         </div>
  //       </div>
  //     </div>


  //     {/* MODEL COMPONENT */}

  //     {openModel && (
  //       <div className={Style.modelBox}>
  //         <Modal
  //          openBox={setOpenModel}
  //         title="WELCOME TO"
  //         head="ETHER TALK JUNCTION (E.T.J)"
  //         info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae soluta sed optio magni commodi! Ipsa eum pariatur reprehenderit distinctio natus?"
  //         smallInfo="kindly Select your name"
  //         image={images.hero}
  //         functionName={createAccount}
  //         address={account}
  //         />
  //       </div>
  //     )}
  //     {error == "" ? "" : <Error error={error}/>}
  //   </div>
  // )
  return (
    <div className={Style.NavBar}>
        <div className={Style.NavBar_box}>
            <div className={Style.NavBar_box_left}>
                <Image src={images.logo} alt="logo" width={50} height={50}></Image>
            </div>
            <div className={Style.NavBar_box_right}>
                {/* 电脑端打开的菜单 */}
                <div  className={Style.NavBar_box_right_menu}>
                    {menuItems.map((el,i)=>(
                        <div onClick={()=>
                            setActive(i+1)}
                            key = {i + 1}
                            className={`${Style.NavBar_box_right_menu_items} ${
                                active === i + 1 ? Style.active_btn : ""
                              }`}
                        >
                            <Link
                                className={Style.NavBar_box_right_menu_items_link}
                                href={el.link}
                                >
                                {el.menu}
                                </Link>
                        </div>
                    ))}
                    
                </div>
                {/* 手机端打开的菜单 */}
                {open &&(
                     <div  className={Style.mobile_menu}>
                     {menuItems.map((el,i)=>(
                         <div onClick={()=>
                             setActive(i+1)}
                             key = {i + 1}
                             className={`${Style.mobile_menu_items} ${
                                 active === i + 1 ? Style.active_btn : ""
                               }`}
                         >
                             <Link
                                 className={Style.mobile_menu_items_link}
                                 href={el.link}
                                 >
                                 {el.menu}
                                 </Link>
                         </div>
                     ))}
                     <p className={Style.mobile_menu_btn}>
                        <Image src ={imags.close} alt="close"
                         width={50} height={550}>
                         onClick={()=>setOpen(false)} 
                         </Image>
                     </p>
                 </div>
                )}


                {/* 链接钱包 */}
                <div className={Style.NavBar_box_right_connect}>
                    {account ==="" ? (
                        <button onClick={()=>connectWallet()}>
                            {""}
                            <span>Connect wallet</span>
                        </button>
                    ):(
                        <button onClick={()=>setOpenModel(true)}>
                            {""}
                            <Image src={userName ? images.accountName : images.create2}
                            alt ="Account image"
                            width={20}
                            height={20}
                            ></Image>
                            <small>{userName || "Create Account"}</small>
                        </button>
                    )}
                </div>
                <div className={Style.NavBar_box_right_open}
                onClick={()=>setOpen(true)}
                >
                    <Image src={images.open} alt ="open" width={30} height={30}></Image>
                </div>
            </div>
        </div>
        {/* // 模型 */}
    {openModel &&(
        <div className={Style.modelBox}>
        <Modal openBox={setOpenModel}
             title = "WELCOME TO"
             head = "Blockchain Chat"
             info="Welcome to the Chat Haven! 
             We're thrilled to have you join our community of passionate conversationalists. Whether you're here to make friends, share ideas, or seek advice, you'll find open ears and warm hearts. Dive into the discussions, and let's make meaningful connections. Happy chatting!"
             smallinfo ="Kindley seclet your name..."
             image={images.hero}
             functionName={createAccount}
             address={account}
        ></Modal>                   
        </div>
    )}
    {error==""?"":<Error error={error}/>}
    </div>
);
}

export default NavBar 