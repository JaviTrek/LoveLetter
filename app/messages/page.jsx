"use client"
import {useEffect} from "react";


export default function Page() {

    useEffect(async () => {
        console.log("trying to connect")
        const res = await fetch("http://localhost:3000/api/database")
        const data = await res.json()
        console.log(data)
        console.log(Response.json({ data }))
        //return Response.json({ data })


    }, []);


    return (
        <h1>Page with slug!</h1>
    )
}