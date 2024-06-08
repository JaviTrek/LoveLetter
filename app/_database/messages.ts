"use server"
import connectToMongoDB from "./connect";
import {MongoClient, ObjectId} from "mongodb";
import { getAITitleColor} from "../_ai/connect";

export type user = "spooder" | "baguette"

export interface message {
    _id?: ObjectId | string,
    user: user,
    theme: string,
    colors?: string //ai
    mainImage?: string, //ai + s3
    bgImage?: string, //ai + s3
    title?: string, //ai
    content: string,
    date: Date
    status: "new" | "old",
}

export interface aiMessage {
    color: string,
    title: string
}

export async function sendMessage(message:message, aiMessage: aiMessage) {

    const client: MongoClient = await connectToMongoDB();
    const db = client.db("messages");
    const col = db.collection(message.user);

    try {
        message.colors = aiMessage.color;
        message.title = aiMessage.title;

        //fixes the @ts-ignore below
        if (typeof message._id === "string") {message._id = new ObjectId(message._id);}

        //@ts-ignore
        const result = await col.insertOne({ ...message });

        if (result.acknowledged) {
            return { status: 'success' };
        } else {
            return { status: 'failed to insert message into MongoDB' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { status: 'overall error' };
    }

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

    // Get the current date in "YYYY-MM-DD" format
    const today = new Date().toISOString().split('T')[0];

    const query = {
        date: { $lt: today }
    };

    return await col.find(query).toArray()

}

export async function updateMessageStatus(_id: string |ObjectId, user:user, status: "old" | "new") {

    user = user === "spooder" ?  "baguette" : "spooder";
    console.log(_id, user, status)

    _id = new ObjectId(_id);

    const col = await getUserCollection(user);

    await col.updateOne({_id: _id}, {$set: { status } });


}