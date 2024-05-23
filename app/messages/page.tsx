import Menu from "../components/Menu";
import {getUser} from "../lib";
import {getMyMessages, message} from "../_database/messages";
import {redirect} from "next/navigation";
import {getImage} from "../_aws/connect";


export default async function Page() {






    const user: "spooder" | "baguette" = await getUser();

    if (user !== "spooder" && user !== "baguette") {
        redirect("/")
    }

    const messages = await getMyMessages(user) as message[]

    messages.forEach(msg => {
        msg._id = null;
    })

    //console.log("LOGGING MESSAGES")
    //console.log(messages)


    //console.log(await getMyMessages(user) as  message[])

    return (
        <>


            <Menu user={user} messages={messages}/>


        </>
    )

}