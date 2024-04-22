"use client"

import {useContext, useEffect, useState} from "react";
import {redirect, useSearchParams} from "next/navigation";
import {UserContext} from "@/app/UserContext";

async function callMongoDB() {

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

// children = will be a page or nested layout
export default function Page({children}) {

    const beeb = useContext(UserContext)
    console.log(beeb)

    let [data, setData] = useState("loading...");

    useEffect(() => {

        async function call() {
            console.log("call use effect")
            const newData = await callMongoDB()
            setData(newData.myRes)
        }

        call()

    }, [])

    return (
        <>
            <UserContext.Provider value={ "baguette" }>
                <h1>Layout</h1>
                {data}
                {children}
            </UserContext.Provider>
        </>
    )

}