import Menu from "../components/Menu";
import {getUser} from "../lib";
import {getBeboMessages, getMyMessages, getUserCollection, message} from "../_database/messages";
import {getAI} from "../_ai/connect";

export default async function Page() {

    const user: "spooder" | "baguette" = await getUser();

    const messages = await getMyMessages(user) as message[]

    console.log("LOGGING MESSAGES")
    console.log(messages)

   /* if (user !== "spooder" && user !== "baguette") {
        await router.push("/")
    }*/






    console.log(await getMyMessages(user) as  message[])

    console.log(await getAI("Every moment with you is an adventure, much like when our little rascals explore new corners of their maze. Just like our clever rats, you always find new ways to steal my heart.", "Love and rats"))
    return (
        <>

            <Menu user={user} messages={messages}/>


        </>
    )

}