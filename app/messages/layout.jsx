"use client"

import {useEffect, useState} from "react";

async function callMongoDB()  {

    const isServer = process.env.IS_SERVER_FLAG ? 'RUN ON SERVER' : 'RUN_ON_CLIENT'

    console.log("trying to connect")
    const res = await fetch("/api/database")
    console.log(res)
    const data = await res.json()
    console.log(isServer)

    console.log(data)
   // console.log(Response.json({ data }))
    return data;
}
//TODO: If search url does not have beeb parameter, redirect to home

// children = will be a page or nested layout
export default function Page({children,  }) {
let [data, setData] = useState("loading...");

useEffect( ()=> {



    async function call() {
        console.log("call use effect")
        const newData = await  callMongoDB()
        setData(newData.myRes)
    }
    call()

},[])

    return (<>
            <h1>Layout</h1>
             {data}
            {children}
        </>)
}