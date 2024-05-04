import { Inter } from "next/font/google";
import React from "react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${process.env.LOVER} Letter`,
  description: "Le best letters for le best bebo!",
};

export default async function RootLayout({ children }) {
  return (

      <html lang="en">
        <body className={`${inter.className} text-center flex flex-col  `}>

      {children}
      </body>
     </html>
  );
}

/*
* import {Inter} from "next/font/google";
import React from "react"
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: `${process.env.LOVER} Letter`, description: "Le best letters for le best bebo!",
};

export default function RootLayout({children}) {

    return (

        <html lang="en">
            <body className={`${inter.className} text-center flex flex-col *:inline-block `}>
                <nav className="bg-green-950 *:p-4 p-4">
                    <h1>You are signed</h1>
                    {/*<p>{user ? `You are signed as: ${user}` : "You are not signed in"}</p>*/