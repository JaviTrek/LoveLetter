import connectToMongoDB from "./connect";
import {MongoClient} from "mongodb";


export default async function sendMessage(message: string, user: "spooder" | "baguette", date: Date) {

    console.log("send message running")

    const client: MongoClient = await connectToMongoDB();
    // database and collection code goes here
    const db = client.db("messages");
    const col = db.collection(user);

    await col.insertOne({user, message, date});

    console.log("inserted into DB")

}