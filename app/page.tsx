"use client"

import {useRouter} from "next/navigation";
import Profile from "./components/Profile";


export default function Home() {

  return (
    <main className="text-center flex gap-2 flex-col min-h-screen overflow-hidden">
        <h1>LoveLetter</h1>
        <h2>Choose your character</h2>
        <div >
           <Profile username={"spooder"}/>
            <Profile username={"baguette"}/>
        </div>
    </main>
  );
}
