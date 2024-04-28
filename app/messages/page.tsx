import Menu from "../components/Menu";
import {getUser} from "../lib";
import connectToMongoDB from "../_database/connect";
import sendMessage from "../_database/send";



export default async function Page() {

    const user = await getUser();

    await connectToMongoDB();

    await sendMessage("I lov u!", "baguette", new Date)

    return (
        <>

                <h1>Layout</h1>

            <Menu user="spooder" />
            {user}
            <h1>aaa</h1>

        </>
    )

}