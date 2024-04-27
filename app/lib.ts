'use server'
import {cookies} from "next/headers";

export async function setUser(user: string) {
    cookies().set("user", user)
}

export async function getUser() {
    return cookies().get("user").value;
}