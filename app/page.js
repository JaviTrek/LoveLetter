import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center flex flex-col min-h-screen overflow-hidden">
        <h1>LoveLetter</h1>
        <h2>Choose your character</h2>
        <div className="flex flex-col w-full">
            <a href="/messages?beeb=spooder">
                <Image src={Image} alt=""/>
                <p>Lil 🕷️</p>
            </a>
            <a href="/messages?beeb=baguette">
                <Image src={Image} alt=""/>
                <p>Lil 🥐</p>
            </a>
        </div>
    </main>
  );
}
