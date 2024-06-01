import Menu from "../components/Menu";
import {getUser} from "../lib";
import {getMyMessages, message, user} from "../_database/messages";
import {redirect} from "next/navigation";

export default async function Page() {

    const user: user = await getUser();

    if (user !== user) {
        redirect("/")
    }

    const messages = await getMyMessages(user) as message[]

    messages.forEach(msg => {
        msg._id = null;
    })


    return (
        <>
            <Menu user={user} messages={messages}/>
        </>
    )

}