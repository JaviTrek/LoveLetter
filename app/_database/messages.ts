import connectToMongoDB from "./connect";
import {MongoClient} from "mongodb";

export type user = "spooder" | "baguette"
export async function sendMessage(message: string, user: user, date: Date) {

    console.log("send message running")

    const client: MongoClient = await connectToMongoDB();
    // database and collection code goes here
    const db = client.db("messages");
    const col = db.collection(user);

    await col.insertOne({user, message, date});

    console.log("inserted into DB")

}

async function getUserCollection(user:user) {
    const client: MongoClient = await connectToMongoDB();
    // database and collection code goes here
    const db = client.db("messages");
    return db.collection(user);
}

export async function getMyMessages(user:user) {

    const col = await getUserCollection(user);

}


export async function getBeboMessages(user: user) {

    const bebo = user === "spooder" ?  "baguette" : "spooder";
    const col = await getUserCollection(bebo);


    console.log("inserted into DB")

}