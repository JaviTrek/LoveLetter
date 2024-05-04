"use server"
import connectToMongoDB from "./connect";
import {MongoClient, ObjectId} from "mongodb";
import {getAI} from "../_ai/connect";

export type user = "spooder" | "baguette"

export interface message {
    _id?: ObjectId,
    user: user,
    theme: string,
    aiTheme?: {
        colors?: { //ai
            primary: string,
            secondary: string,
            font: string
        },
        mainImage?: string, //ai + s3
        bgImage?: string, //ai + s3
    }
    title?: string, //ai
    content: string,
    date: Date
}

export async function sendMessage(message:message) {

    const client: MongoClient = await connectToMongoDB();
    const db = client.db("messages");
    const col = db.collection(message.user);

    const ai = await getAI(message.content, message.theme)
    const colors = ai.colors.color
    message.title = ai.title.title;

    message.aiTheme = {

        colors: {
            primary: colors.primary,
            secondary: colors.secondary,
            font: colors.font,

        }
    }
    console.log(message)
    await col.insertOne({...message});

    console.log("inserted into DB")
}

export async function getUserCollection(user:user) {
    const client: MongoClient = await connectToMongoDB();
    // database and collection code goes here
    const db = client.db("messages");
    return db.collection(user);
}

export async function getMyMessages(user:user): Promise<message | message[]> {

    const col = await getUserCollection(user);
    return await col.find().toArray() as message | message[];

}


export async function getBeboMessages(user: user) {

    const bebo = user === "spooder" ?  "baguette" : "spooder";
    const col = await getUserCollection(bebo);

    const query = { date: { $lt: new Date } };
    return await col.find(query).toArray()

}