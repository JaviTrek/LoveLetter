import Menu from "../components/Menu";
import {getUser} from "../lib";



export default async function Page() {

    const user = await getUser();

    return (
        <>

                <h1>Layout</h1>

            <Menu user="spooder" />
            {user}
            <h1>aaa</h1>

        </>
    )

}