import Menu from "../components/Menu";
import {getUser} from "../lib";
import connectToMongoDB from "../_database/connect";
import {sendMessage} from "../_database/messages";



export default async function Page() {

    const user: "spooder" | "baguette" = await getUser();

    await connectToMongoDB();

    await sendMessage("I lov u!", user, new Date)

    return (
        <>

                <h1>Layout</h1>

            <Menu user="spooder" />
            {/*Add message and createmessage components here, display depending on which option is set*/}
            {user}
            <h1>aaa</h1>

        </>
    )

}