"use client"

import {useState} from "react";
import CreateMessage from "./CreateMessage";
import {user} from "../_database/messages";

interface Props {
    user: user
}


export default function Menu({user}: Props) {

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
                <div>
                    <h1>Your messages</h1>
                </div>

                :

                //we are writing
                <CreateMessage user={user}/>
            }




        </div>
    )
}