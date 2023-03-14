"use client";
import Image from "next/image"
import Link from "next/link"
import { Lexend } from "next/font/google";
import { Inter } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Started(){
    return (
        <section id="get-started-today" className="relative overflow-hidden bg-blue-600 py-32">
            <Image alt=' ' src='/background-call.jpg' height='1244' width='2347' className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" />
            <div className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className={`${lexend.className} text-3xl tracking-tight text-white sm:text-4xl`}>Get started today</h2>
                    <p className={`${inter.className} mt-4 text-lg tracking-tight text-white`}>{`It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.`}</p>
                    <Link className={`${inter.className} group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10`} href='/register'>Get 6 months</Link>
                </div>
            </div>
        </section>
    )
}