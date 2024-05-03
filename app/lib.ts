'use server'
import {cookies} from "next/headers";
import {user} from "./_database/messages";

export async function setUser(user: user) {
    cookies().set("user", user)
}

export async function getUser() {
    const currentUser = cookies().get("user").value;
    if (currentUser === "spooder" || currentUser === "baguette") {
        return currentUser;
    } else return null;
}