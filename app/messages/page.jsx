"use client"
import {useContext, useEffect, useState} from "react";
import {UserContext} from "@/app/UserContext";


export default function Page() {

    const beeb = useContext(UserContext)
    return (
        <>

                <h1>Pageeeeeeeeeeeeeeeeeeee</h1>
                {beeb}

        </>
    )
}