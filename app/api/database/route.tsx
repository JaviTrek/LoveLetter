import connectToMongoDB from "../../_database/connect";

export async function GET(): Promise<Response> {
    try {
        const client = await connectToMongoDB();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Correclty pinged deployment");
        return new Response( JSON.stringify({ myRes: "Pinged your deployment. You successfully connected to MongoDB!" }))
//        return { status: 200, body: "Pinged your deployment. You successfully connected to MongoDB!" };
    } catch (error) {
        console.error("Connection to MongoDB failed", error);
        return new Response( JSON.stringify({ myRes: "Error, no connection" }))
    }
}