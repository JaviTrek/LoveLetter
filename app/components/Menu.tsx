"use client"

import {useState} from "react";
import CreateMessage from "./CreateMessage";
import {message, user} from "../_database/messages";
import LoveMessage from "./LoveMessage";
import {useRouter} from "next/navigation";
import {setUser} from "../lib";

interface Props {
    user: user
    messages: message[]
}

//todo: create pagination to display multiple messages


export default function Menu({user, messages}: Props) {
    const router = useRouter()

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
                //TODO: Tabify these messages/do pagination/something like that
                <div>

                   {/* //TODO: Put this in a container*/}
                    <h1 className="text-left p-4 sm:p-10">My messages</h1>

                    <div
                        className="flex flex-col sm:flex-row  gap-8 sm:m-10  align-middle rounded-xl p-4 overflow-x-auto no-scrollbar ">


                        {messages.map((message, index) => (

                            <LoveMessage user={user} content={message.content} date={message.date} title={message.title}
                                         key={index} colors={message.colors} theme="banana"/>))}
                    </div>
                </div>

                :

                //we are writing
                <CreateMessage user={user}/>}


        </div>)
}