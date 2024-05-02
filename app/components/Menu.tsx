"use client"

import {useState} from "react";
import CreateMessage from "./CreateMessage";

interface Props {
    user: String
}


export default function Menu({user}: Props) {

    const [messageDisplay, setMessageDisplay] = useState("read")

    return(
        <div>

            <div className="flex justify-center align-middle bg-green-800">
                <div className="group bg-green-700 py-4 relative grow" onClick={() => {
                    setMessageDisplay("read")
                }}>
                    <p>Read</p>
                    <div className="group-hover:flex hidden flex-col absolute top-full ">
                        <button className=" text-left p-4 "> My messages</button>
                        <button> Bebo's messages</button>
                    </div>
                </div>


                <button className="grow" onClick={() => {
                    setMessageDisplay("write")
                }}>
                    Write
                </button>


            </div>

            {messageDisplay === "read" ?

                //we are reading messages
                <div>
                    <h1>Your messages</h1>
                </div>

                :
                //we are writing
                <CreateMessage/>
            }
        </div>

    )
}