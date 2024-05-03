import Menu from "../components/Menu";
import {getUser} from "../lib";
import {getMyMessages, getUserCollection} from "../_database/messages";

export default async function Page() {

    const user: "spooder" | "baguette" = await getUser();

   /* if (user !== "spooder" && user !== "baguette") {
        await router.push("/")
    }*/






    console.log(await getMyMessages(user))
    return (
        <>

            <Menu user={user} />


        </>
    )

}