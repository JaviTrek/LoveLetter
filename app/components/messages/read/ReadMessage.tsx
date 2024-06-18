import LoveMessage from "./LoveMessage";
import {message, user} from "../../../_database/messages";
import {useState} from "react";

interface Props {
    user: user
    beboMessages: message[]
    myMessages: message[]
}

export default function ReadMessage({user, beboMessages, myMessages}: Props) {

    //console.log(beboMessages)


    const [messageAmount, setMessageAmount] = useState(3)

    const [displayMessage, setDisplayMessage] = useState(beboMessages.slice(0,messageAmount))

    function showMoreMessage() {
        setDisplayMessage(beboMessages.slice(0,messageAmount + 3))
        setMessageAmount(messageAmount + 3)
    }

    return(
        <div>
            <div>

                {/* //TODO: Put this in a container*/}
                <h1 className="text-left p-4 sm:p-5">Messages from {user === "spooder" ? "baguette 🥐" : "spooder 🕷️"}</h1>


                <div
                    className="flex flex-col sm:flex-row  gap-8 sm:m-4 align-middle rounded-xl p-4 overflow-x-auto no-scrollbar  ">
                    {displayMessage.map((message, index) => (

                        <LoveMessage user={user} content={message.content} date={message.date} title={message.title}
                                     status={message.status}
                                     key={index} colors={message.colors} theme="banana" _id={message._id}/>))}
                </div>
                <button className={`${messageAmount > beboMessages.length ? "brightness-75 cursor-none" : ""} button p-2`}  onClick={showMoreMessage}>Read more messages</button>

<br/><br/>

                <h1 className="text-left p-4 sm:p-5">Messages you wrote</h1>

                <div
                    className="flex flex-col sm:flex-row  gap-8 sm:m-4 align-middle rounded-xl p-4 overflow-x-auto no-scrollbar ">
                    {myMessages.map((message, index) => (

                        <LoveMessage user={user} content={message.content} date={message.date} title={message.title}
                                     status={message.status}
                                     key={index} colors={message.colors} theme="banana" _id={message._id}/>))}
                </div>
            </div>
        </div>
    )
}