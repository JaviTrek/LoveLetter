"use client"

import {useState} from "react";
import CreateMessage from "./CreateMessage";
import {getBeboMessages, message, user} from "../_database/messages";
import LoveMessage from "./LoveMessage";

interface Props {
    user: user
    messages: message[]
}

//todo: create pagination to display multiple messages


export default function Menu({user, messages}: Props) {


    const [messageDisplay, setMessageDisplay] = useState("read")

    return(
        <div>

            <div className="flex justify-center align-middle bg-green-800 *:py-4 *:grow *:duration-300">


                <button
                    className={`group  relative ${messageDisplay === "read" ? "bg-green-700" : "bg-green-700 brightness-50"}`}
                    onClick={() => {
                        setMessageDisplay("read")
                    }}> Read Messages
                </button>


                <button
                    className={`  relative ${messageDisplay === "write" ? "bg-green-700" : "bg-green-700 brightness-50"}`}
                    onClick={() => {
                        setMessageDisplay("write")
                    }}>
                    Write Message
                </button>


            </div>
            {messageDisplay === "read" ?

                //we are reading messages
                <div className="flex justify-center align-middle bg-green-800 rounded-xl p-4 ">

                    {messages.map((message, index) => (

                            <LoveMessage user={user} content={message.content} date={message.date} title={message.title}
                                         aiTheme={message.aiTheme} key={index}/>


                    ))}
                </div>

                :

                //we are writing
                <CreateMessage user={user}/>
            }


        </div>
    )
}