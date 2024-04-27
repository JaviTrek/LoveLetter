




/*async function callMongoDB() {

    const isServer = process.env.IS_SERVER_FLAG ? 'RUN ON SERVER' : 'RUN_ON_CLIENT'

    console.log("trying to connect")
    const res = await fetch("/api/database")
    console.log(res)
    const data = await res.json()
    console.log(isServer)

    console.log(data)
    // console.log(Response.json({ data }))
    return data;
}*/

// children = will be a page or nested layout
import {useEffect, useState} from "react";
import {getUser} from "../lib";

export default async function Page({children}) {


/* let [data, setData] = useState("loading...");*/
   const [user, setUser] = useState("default user");

    // noinspection JSVoidFunctionReturnValueUsed
    useEffect(() => {
            async function call() {
                /*         console.log("call use effect")
                         const newData = await callMongoDB()
                         setData(newData.myRes)*/
                const newUser = await getUser();
                console.log(newUser)
                setUser(newUser)
            }

            call()

        },
        [])




    console.log(user)


    return (
        <>

                <h1>Layout</h1>

                {children}
                {user}
            <h1>aaa</h1>

        </>
    )

}