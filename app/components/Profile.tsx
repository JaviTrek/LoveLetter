import {setUser} from "../lib";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface Props {
    username: "spooder" | "baguette"
}


export default function Profile({username}: Props) {
    const router = useRouter()
    return (<button className={`m-5 md:m-12 ${username === "spooder" ? "bg-purple-900": "bg-amber-900"} rounded-xl hover:scale-110 duration-300`} onClick={async () => {
            await setUser(username)
            router.push("/messages")
        }}>

    <Image className=" w-28 h-28 md:w-52 md:h-52 mx-auto" src={`/${username}.jpg`} alt="" width={300} height={300}/>


            <p className="md:p-4 p-2"> {username === "spooder" ? "spooder 🕷️" : "baguette 🥐"}</p>


        </button>

    )
}