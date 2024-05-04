import { Inter } from "next/font/google";
import React from "react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Love Letter",
  description: "Le best letters for le best bebo!",
};

export default function RootLayout({ children }) {
  return (

      <html lang="en">
      <body className={`${inter.className} text-center flex flex-col  `}>
      <nav className="bg-green-950 *:p-4 p-4">
          <a href="/">Home</a>
          <a href="/messages">Your Messages</a>
          <a href="/messages">Beeb Messages</a>
      </nav>
      {children}
      </body>
     </html>
  );
}
