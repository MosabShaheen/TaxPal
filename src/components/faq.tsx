"use client"
import Image from "next/image"
import { Lexend } from "next/font/google";
import { Inter } from "next/font/google";
import { useState } from "react";
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Faq(){
    const [activeTab1, setActiveTab1] = useState(false);
    const [activeTab2, setActiveTab2] = useState(false);
    const [activeTab3, setActiveTab3] = useState(false);
    const [activeTab4, setActiveTab4] = useState(false);
    const [activeTab5, setActiveTab5] = useState(false);
    const [activeTab6, setActiveTab6] = useState(false);
    const [activeTab7, setActiveTab7] = useState(false);
    const [activeTab8, setActiveTab8] = useState(false);
    const [activeTab9, setActiveTab9] = useState(false);
    return(
        <section id="faq" aria-label="faq-title" className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
            <Image alt="faq-bg" width='1558' height='946' className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4" src='/background-faqs.jpg'/>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 id="faq-title" className={`${lexend.className} text-3xl tracking-tight text-slate-900 sm:text-4xl`}>Frequently asked questions</h2>
                    <p className={`${inter.className} mt-4 text-lg tracking-tight text-slate-700`}>{`If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.`}</p>
                </div>
                <ul role='list' className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    <li>
                        <ul role='list' className="flex flex-col gap-y-8">
                            <li>
                                <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 cursor-pointer text-lg leading-7 text-slate-900`} onClick={()=>setActiveTab1(!activeTab1)}>Does TaxPal handle VAT</h3>
                                {
                                    activeTab1 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab1 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>Well no, but if you move your company offshore you can probably ignore it.</p>
                                </span>
                            </li>
                            <li>
                            <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 text-lg leading-7 cursor-pointer text-slate-900`} onClick={()=>setActiveTab2(!activeTab2)}>Can I pay for my subscription via purchase order?</h3>
                                {
                                    activeTab2 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab2 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>Absolutely, we are happy to take your money in all forms.</p>
                                </span>
                            </li>
                            <li>
                                <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 text-lg leading-7 cursor-pointer text-slate-900`} onClick={()=>setActiveTab3(!activeTab3)}>How do I apply for a job at TaxPal?</h3>
                                {
                                    activeTab3 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab3 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>{`We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.`}</p>
                                </span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul role='list' className="flex flex-col gap-y-8">
                            <li>
                                <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 text-lg leading-7 cursor-pointer text-slate-900`} onClick={()=>setActiveTab4(!activeTab4)}>What was that testimonial about tax fraud all about?</h3>
                                {
                                    activeTab4 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab4 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>{`TaxPal is just a software application, ultimately your books are your responsibility.`}</p>
                                </span>
                            </li>
                            <li>
                                <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 text-lg leading-7 cursor-pointer text-slate-900`} onClick={()=>setActiveTab5(!activeTab5)}>TaxPal sounds horrible but why do I still feel compelled to purchase?</h3>
                                {
                                    activeTab5 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab5 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>{`This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.`}</p>
                                </span>
                            </li>
                            <li>
                                <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 text-lg leading-7 cursor-pointer text-slate-900`} onClick={()=>setActiveTab6(!activeTab6)}>I found other companies called TaxPal, are you sure you can use this name?</h3>
                                {
                                    activeTab6 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab6 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>{`Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.`}</p>
                                </span>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <ul role='list' className="flex flex-col gap-y-8">
                            <li>
                                <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 text-lg leading-7 cursor-pointer text-slate-900`} onClick={()=>setActiveTab7(!activeTab7)}>How do you generate reports?</h3>
                                {
                                    activeTab7 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab7 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>{`You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.`}</p>
                                </span>
                            </li>
                            <li>
                                <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 text-lg leading-7 cursor-pointer text-slate-900`} onClick={()=>setActiveTab8(!activeTab8)}>Can we expect more inventory features?</h3>
                                {
                                    activeTab8 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab8 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>{`In life it’s really better to never expect anything at all.`}</p>
                                </span>
                            </li>
                            <li>
                                <div className="flex justify-between">
                                <h3 className={`${lexend.className} hover:text-blue-500 text-lg leading-7 cursor-pointer text-slate-900`} onClick={()=>setActiveTab9(!activeTab9)}>I lost my password, how do I get into my account?</h3>
                                {
                                    activeTab9 ?
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path></svg>
                                    
                                    :
                                    
                                    <svg className="mt-0.5 ml-4 mr-4 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12H6"></path><path className="group-open:hidden" d="M12 6v12"></path></svg>
                                    
                                }
                                </div>
                                <span className={`${
                                    activeTab9 ? " ": "hidden"
                                }`}>
                                <p className={`${inter.className} mt-4 text-sm text-slate-700`}>{`Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.`}</p>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}