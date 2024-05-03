"use server"
import connectToMongoDB from "./connect";
import {MongoClient, ObjectId} from "mongodb";

export type user = "spooder" | "baguette"

export interface message {
    _id?: ObjectId,
    theme: string
    user: user,
    content: string,
    date: Date
}

export async function sendMessage(message:message) {

    console.log("sendmessage called")
    const client: MongoClient = await connectToMongoDB();
    // database and collection code goes here
    const db = client.db("messages");
    const col = db.collection(message.user);

    await col.insertOne({...message});

    console.log("inserted into DB")
}

export async function getUserCollection(user:user) {
    const client: MongoClient = await connectToMongoDB();
    // database and collection code goes here
    const db = client.db("messages");
    return db.collection(user);
}

export async function getMyMessages(user:user) {

    const col = await getUserCollection(user);
    return col.find().toArray();

}


export async function getBeboMessages(user: user) {

    const bebo = user === "spooder" ?  "baguette" : "spooder";
    const col = await getUserCollection(bebo);

    const query = { date: { $lt: new Date } };
    return await col.find(query).toArray()

}