import LoveMessage from "./LoveMessage";
import {message, user} from "../../../_database/messages";

interface Props {
    user: user
    beboMessages: message[]
    myMessages: message[]
}

export default function ReadMessage({user, beboMessages, myMessages}: Props) {


    return(
        <div>
            <div>

                {/* //TODO: Put this in a container*/}
                <h1 className="text-left p-4 sm:p-5">Messages from {user === "spooder" ? "baguette 🥐" : "spooder 🕷️"}</h1>


                <div
                    className="flex flex-col sm:flex-row  gap-8 sm:m-4 align-middle rounded-xl p-4 overflow-x-auto no-scrollbar  ">
                    {beboMessages.map((message, index) => (

                        <LoveMessage user={user} content={message.content} date={message.date} title={message.title}
                                     status={message.status}
                                     key={index} colors={message.colors} theme="banana" _id={message._id}/>))}
                </div>

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