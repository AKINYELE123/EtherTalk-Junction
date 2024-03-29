import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Style from "./Chat.module.css";
import images from "../../../assets";
import { convertTime } from "../../../Utills/ApiFeatures";
import { Loader } from "../../index";

const Chat = ({
    functionName,
    readMessage,
    friendMsg,
    account,
    userName,
    loading,
    currentUserName,
    currentUserAddress,
    readUser
}) => {
    const [message, setMessage] = useState("");
    const [chatData, setChatData] = useState({
        name: "",
        address: "",
    });

    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;
        setChatData(router.query);
        readMessage(router.query.address);
        readUser(router.query.address);
    }, [router.isReady]);

    useEffect(() => {
        if (chatData.address) {
          readMessage(chatData.address);
          readUser(chatData.address);
        }
      }, []);

    console.log(
        "Chat name = " + chatData.name + " Chat Address = " + chatData.address + " msg = " + message
    );
    console.log(
        "Chat curr name = " + currentUserName + " Chat Address = " + currentUserAddress + " msg = " + message
    );

    return (
        <div className={Style.Chat}>
            {currentUserAddress && currentUserName ? (
                <div className={Style.Chat_use_info}>
                    <div className={Style.Chat_use_info_box}>
                        <h4>{currentUserName}</h4>
                        <p className={Style.show}> {currentUserAddress} </p>
                    </div>
                </div>
            ) : (
                ""
            )}

            <div className={Style.Chat_box_box}>
                <div className={Style.Chat_box}>
                    <div className={Style.Chat_box_left}>
                        {friendMsg.map((el, i) => (
                            <div>
                                {" "}
                                {el.sender == chatData.address ? (
                                    <div className={Style.Chat_box_left_title}>
                                        
                                        <span>
                                            {" "}
                                            {chatData.name}
                                            {" "}
                                            <small> Time: {convertTime(el.timestamp)} </small>{" "}
                                        </span>
                                    </div>
                                ) : (
                                    <div className={Style.Chat_box_left_title}>
                                        <span>
                                            {" "}
                                            {userName}
                                            {" "}
                                            <small> Time: {convertTime(el.timestamp)} </small>{" "}
                                        </span>
                                    </div>
                                )}{" "}
                                <p key={i + 1}>
                                    {" "}
                                    {el.msg}
                                    {""}
                                    {""}{" "}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {currentUserAddress && currentUserName ? (
                    <div className={Style.Chat_box_send}>
                        <div className={Style.Chat_box_send_img}>
                            <input
                                type="text"
                                placeholder="type you message"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {loading == true ? (
                                <Loader />
                            ) : (
                                <Image
                                    src={images.send}
                                    alt="file"
                                    width={50}
                                    height={50}
                                    onClick={() =>
                                        functionName({ msg: message, address: currentUserAddress })
                                    }
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Chat;
