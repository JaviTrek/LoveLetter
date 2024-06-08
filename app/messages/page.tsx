import Menu from "../components/messages/Menu";
import {getUser} from "../lib";
import {getBeboMessages, getMyMessages, message, user} from "../_database/messages";
import {redirect} from "next/navigation";

export default async function Page() {

    const user: user = await getUser();

    if (user !== user) {
        redirect("/")
    }

    const beboMessages = await getBeboMessages(user) as message[]
    const myMessages = await getMyMessages(user) as message[]




    return (
        <>
            <Menu user={user} beboMessages={beboMessages} myMessages={myMessages}/>
        </>
    )

}