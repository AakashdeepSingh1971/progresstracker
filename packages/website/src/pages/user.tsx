import Head from "next/head";
import React, { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { AiFillCheckCircle } from 'react-icons/ai';
import HeadT from "../components/headT";
import Table from "../components/table";
export default function Home() {
  return (
    <div>
      <Head>
        <title>JassWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Company name</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="/">Home</a>
            <a className="mr-5 hover:text-gray-900" href="/admin">Admin</a>
          </nav>
        </div>
      </header>
      <div className="flex h-screen mt-10">
        <div className="w-1/4 sticky-right-0 shadow-lg" >
          <div className="m-4"> 
          <div className=""></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          </div>
        </div>
        <div className=" w-3/4  ">
          <div className="flex m-3"> <h2>Employee status </h2> </div>
         <ProgressBar progress={50}/>
          <HeadT />
          <Table prog={40} number={1} job="daddy1" name="aakas1" discription="aakash1 akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          <Table prog={90} number={2} job="daddy" name="aakash" discription="aakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
        </div>
      </div>
    </div>
  );
}
