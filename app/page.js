"use client"

import Image from "next/image";
import {setUser} from "@/app/lib";
import {useRouter} from "next/navigation";


export default function Home() {
    const router = useRouter()
  return (
    <main className="text-center flex flex-col min-h-screen overflow-hidden">
        <h1>LoveLetter</h1>
        <h2>Choose your character</h2>
        <div className="flex flex-col w-full">
            <button onClick={ async () => {
                await setUser("spooder")
                router.push("/messages")
            }}>
                <Image src={Image} alt=""/>
                <p>Lil 🕷️</p>

            </button>
            <button onClick={async () => {
                await setUser("baguette")
                router.push("/messages")
            }}>
                <Image src={Image} alt=""/>
                <p>Lil 🥐</p>

            </button>
        </div>
    </main>
  );
}
