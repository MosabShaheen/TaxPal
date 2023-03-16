"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";
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

function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(' ')
  }
import { useState } from "react";


export default function Functional() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      <section
        id="features"
        aria-label="Features for running your books"
        className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
      >
        <Image
          alt="bg"
          src="/background.jpg"
          width="2245"
          height="1636"
          className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        />
        <div
          className="mx-auto max-w-7x px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <h2
              className={`${lexend.className} font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl`}
            >
              Everything you need to run your books.
            </h2>
            <p
              className={`${inter.className} mt-6 text-lg tracking-tight text-blue-100`}
            >
              Well everything you need if you aren’t that picky about minor
              details like tax compliance.
            </p>
          </div>
        
        <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          <Tab.Group vertical>
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <Tab.List className='relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'>
              <div className={`group simpleTab ${
                activeTab === "tab1" ?  "activeTab" : "hoverTab"
              }`}>
                <h3>
                  <Tab
                  onClick={() => setActiveTab("tab1")}
                  className={({ selected }) =>
                  classNames(
                    `${lexend.className} classselect`,
                    selected
                      ? 'textselected'
                      : 'texthover'
                  )
                }>
                    <span className="spanClass"></span>
                      Payroll
                  </Tab>
                </h3>
                <p className={`${inter.className} fparagraph`}>
                  {`Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.`}
                </p>
              </div>
              <div className={`group simpleTab ${
                activeTab === "tab2" ?  "activeTab" : "hoverTab"
              }`}>
                <h3>
                  <Tab
                  onClick={() => setActiveTab("tab2")}
                  className={({ selected }) =>
                  classNames(
                    `${lexend.className} classselect`,
                    selected
                      ? 'textselected'
                      : 'texthover'
                  )
                }>
                    <span className="spanClass"></span>
                      Claim expenses
                  </Tab>
                </h3>
                <p className={`${inter.className} fparagraph`}>
                  {`All of your receipts organized into one place, as long as you don't mind typing in the data by hand.`}
                </p>
              </div>
              <div className={`group simpleTab ${
                activeTab === "tab3" ?  "activeTab" : "hoverTab"
              }`}>
                <h3>
                  <Tab
                  onClick={() => setActiveTab("tab3")}
                  className={({ selected }) =>
                  classNames(
                    `${lexend.className} classselect`,
                    selected
                      ? 'textselected'
                      : 'texthover'
                  )
                }>
                    <span className="spanClass"></span>
                      VAT handling
                  </Tab>
                </h3>
                <p className={`${inter.className} fparagraph`}>
                  {`We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.`}
                </p>
              </div>
              <div className={`group simpleTab ${
                activeTab === "tab4" ?  "activeTab" : "hoverTab"
              }`}>
                <h3>
                  <Tab
                  onClick={() => setActiveTab("tab4")}
                  className={({ selected }) =>
                  classNames(
                    `${lexend.className} classselect`,
                    selected
                      ? 'textselected'
                      : 'texthover'
                  )
                }>
                    <span className="spanClass"></span>
                      Reporting
                  </Tab>
                </h3>
                <p className={`${inter.className} fparagraph`}>
                 {`Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.`}
                </p>
              </div>
            </Tab.List>
          </div>
          <div className="lg:col-span-7">
            <Tab.Panels>
                <Tab.Panel>
                  <div className="divPanel">
                    <div className="emptyDiv"></div>
                    <p className={`${inter.className} paragraph`} >
                    {`Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.`}
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    <Image alt="payroll" src='/payrollimg.png' width="2174" height="1464" className="w-full" />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="divPanel">
                    <div className="emptyDiv"></div>
                    <p className={`${inter.className} paragraph`} >
                    {`All of your receipts organized into one place, as long as you don't mind typing in the data by hand.`}
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    <Image alt="expenses" src='/expenses.png' width="2174" height="1464" className="w-full" />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="divPanel">
                    <div className="emptyDiv"></div>
                    <p className={`${inter.className} paragraph`} >
                    {`We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.`}
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    <Image alt="vat-returns" src='/vat-returns.png' width="2174" height="1464" className="w-full" />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="divPanel">
                    <div className="emptyDiv"></div>
                    <p className={`${inter.className} paragraph`} >
                    {`Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.`}
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    <Image alt="reporting" src='/reporting.png' width="2174" height="1464" className="w-full" />
                  </div>
                </Tab.Panel>
            </Tab.Panels>
          </div>
          </Tab.Group>
        </div>
        </div>
      </section>
    </>
  );
}
