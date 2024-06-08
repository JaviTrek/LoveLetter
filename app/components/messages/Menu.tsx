"use client"

import {useState} from "react";
import WriteMessage from "./write/WriteMessage";
import {message, user} from "../../_database/messages";
import LoveMessage from "./read/LoveMessage";
import {useRouter} from "next/navigation";
import {setUser} from "../../lib";
import ReadMessage from "./read/ReadMessage";

interface Props {
    user: user
    beboMessages: message[]
    myMessages: message[]
}

//todo: create pagination to display multiple messages


export default function Menu({user, beboMessages, myMessages}: Props) {
    const router = useRouter()

    console.log(myMessages)

    const [messageDisplay, setMessageDisplay] = useState("read")

    return (<div className="min-h-screen">

            <div className="flex justify-center align-middle *:py-4  *:duration-300">


                <button
                    className={`group  grow relative ${messageDisplay === "read" ? "bg-green-700" : "bg-green-700 brightness-50"}`}
                    onClick={() => {
                        setMessageDisplay("read")
                    }}> Read Messages
                </button>


                <button
                    className={`  relative grow ${messageDisplay === "write" ? "bg-green-700" : "bg-green-700 brightness-50"}`}
                    onClick={() => {
                        setMessageDisplay("write")
                    }}>
                    Write Message
                </button>

                <button
                    className={` bg-red-600 px-2 brightness-50 hover:brightness-100 text-sm`}
                    onClick={async () => {
                        await setUser(null)
                        router.push("/")
                    }}>
                    LOG OUT
                </button>


            </div>



            {messageDisplay === "read" ?
               <ReadMessage user={user} beboMessages={beboMessages} myMessages={myMessages}/>
                :

                //we are writing
                <WriteMessage user={user}/>}


    </div>)
}