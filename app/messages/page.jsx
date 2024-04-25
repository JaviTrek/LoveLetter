import {getUser} from "@/app/lib";


export default async function Page() {


    const user = await getUser();
    console.log("user log messages")
    console.log(user)



    return (
        <>

                <h1>Layout</h1>

                {user}
            <h1>aaa</h1>

        </>
    )

}