import {useEffect, useState} from "react";
import Image from "next/image";

interface MessageProps {
    theme: string;
    content: string;
    user: string;
    date: Date;
    title: string;
    colors: string;
}

export default function LoveMessage({ content, user, date, title, colors }: MessageProps) {



    //tailwind cannot dynamically set a class, but if we create these "pre-sets" then it will be able to
    const colorVariants = {
        blue: 'bg-blue-700 sm:hover:bg-blue-600 text-white',
        red: 'bg-red-600 sm:hover:bg-red-500 text-white',
        yellow: 'bg-yellow-500 sm:hover:bg-yellow-300 text-black',
        green: 'bg-green-600 sm:hover:bg-green-500 text-white',
        indigo: 'bg-indigo-600 sm:hover:bg-indigo-500 text-white',
        purple: 'bg-purple-600 sm:hover:bg-purple-500 text-white',
        pink: 'bg-pink-600 sm:hover:bg-pink-500 text-white',
        teal: 'bg-teal-600 sm:hover:bg-teal-500 text-white',
        orange: 'bg-orange-600 sm:hover:bg-orange-500 text-white',
        gray: 'bg-gray-600 sm:hover:bg-gray-500 text-white',
        black: 'bg-black sm:hover:bg-gray-800 text-white',
        white: 'bg-white sm:hover:bg-gray-100 text-black',
        amber: 'bg-amber-600 sm:hover:bg-amber-500 text-black',
        cyan: 'bg-cyan-600 sm:hover:bg-cyan-500 text-white',
        lime: 'bg-lime-600 sm:hover:bg-lime-500 text-black',
        emerald: 'bg-emerald-600 sm:hover:bg-emerald-500 text-white',
        fuchsia: 'bg-fuchsia-600 sm:hover:bg-fuchsia-500 text-white',
        rose: 'bg-rose-600 sm:hover:bg-rose-500 text-white',
        violet: 'bg-violet-600 sm:hover:bg-violet-500 text-white',
        sky: 'bg-sky-600 sm:hover:bg-sky-500 text-white',
    };

    const [display, setDisplay] = useState(false)
    const [myImage, setMyImage] = useState(`/LLLogo.webp`);

useEffect(()=> {
    const fetchData = async()=> {
        const s3Image = await fetch(`/api/aws/getImage?key=${title.replace(/\s/g, '')}.jpeg`);
        console.log("called!")
        const myImage = await s3Image.json()
        setMyImage(myImage.image )
    }
    fetchData();
})


    function switchDisplay() {
        console.log("clicked!")
        setDisplay(!display)
    }

    //console.log(colors)
    return (
        <div className={`${display ? `fixed top-0 left-0  sm:p-4  h-full bg-black bg-opacity-75` : ""} w-full text-left mx-auto`} onClick={() => switchDisplay()}>

            <div className={`${colorVariants[colors]} flex  rounded-xl duration-300 cursor-pointer ${display ? "flex-col  sm:w-2/3  sm:py-4 p-6 sm:p-0" : ""} h-full   no-scrollbar overflow-auto  justify-start align-top  sm:mx-auto `} >

                <Image src={myImage} className=" bg-fuchsia-300 rounded-xl mx-auto min-w-[150px]" alt="" width={150} height={150}/>

                <div className="sm:m-3  p-2 *:py-2 *:sm:py-0 w-full">
                    <h2 className={`break-words sm:text-lg font-bold`}>{display ? title : `${title.slice(0, 60)}`}</h2>
                    <p className={`   break-words  text-base sm:my-2 ${display ? " sm:w-4/5" : "sm:w-60 hidden md:block"}`}>{display ? content : `${content.slice(0, 50)}...`}</p>
                    <p className={` text-sm italic`}>To be read on {date.toString()}</p>
                </div>


            </div>
        </div>

    );
};

