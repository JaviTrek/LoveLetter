'use server'
import {cookies} from "next/headers";

export async function setUser(user) {
    console.log("before")
    console.log(cookies().get("user"))
    await cookies().set("user",user)
    console.log("after")
    console.log(cookies().get("user"))
}

export async function getUser() {
    console.log("getUsercookie")
    console.log(cookies().get("user"))

    return cookies().get("user").value;
}