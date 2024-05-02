import Menu from "../components/Menu";
import {getUser} from "../lib";
import connectToMongoDB from "../_database/connect";
import {getBeboMessages, sendMessage} from "../_database/messages";



export default async function Page() {

    const user: "spooder" | "baguette" = await getUser();



    await sendMessage("Covington", user, new Date("2024-05-01"))


    console.log(await getBeboMessages(user))
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