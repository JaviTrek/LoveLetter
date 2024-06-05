import {MongoClient, ServerApiVersion} from "mongodb";
export const maxDuration = 30;
const uri = process.env.MONGO;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
let mongoClient: MongoClient;

export default async function connectToMongoDB() {

    if (mongoClient) {
        console.log("Using existing MongoDB connection");
        return mongoClient;
    } else {
        try {
            // Connect the client to the server (optional starting in v4.7)
            await client.connect();
            // Assign the established connection to mongoClient
            mongoClient = client;
            console.log("New MongoDB connection established");
        } catch (error) {
            console.error("Failed to connect to MongoDB", error);
            throw new Error('MongoDB connection error');
        }
    }
    return mongoClient;
}