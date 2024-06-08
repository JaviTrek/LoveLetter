import Menu from "../components/Menu";
import {getUser} from "../lib";
import {getBeboMessages, getMyMessages, message, user} from "../_database/messages";
import {redirect} from "next/navigation";

export default async function Page() {

    const user: user = await getUser();

    if (user !== user) {
        redirect("/")
    }

    const messages = await getBeboMessages(user) as message[]

    messages.forEach(msg => {

        msg._id = msg._id.toString();
    })

    //lets sort our dates

    // @ts-ignore
    messages.sort((a,b) => new Date(b.date) - new Date(a.date))





    return (
        <>
            <Menu user={user} messages={messages}/>
        </>
    )

}