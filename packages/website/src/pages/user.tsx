import Head from "next/head";
import React, {
  // useEffect, useState
} from "react";
import ProgressBar from "../components/ProgressBar";
import { AiFillCheckCircle } from 'react-icons/ai';
import { useState } from "react";
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
          <div className="flex m-3"> <h2> </h2> </div>
          <div className="m-3"><h2>Progress</h2>
            <ProgressBar progress={50} />
            <h2>Tasks</h2>
          </div>
          {/* <HeadT /> */}
          <Table
            number={1} checkbox={true} discription="aakash1 akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          <Table number={2}  checkbox={true} discription="aakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
        </div>
      </div>
    </div>
  );
}

function Table(props: {
  // job: string,
  number: number,
  checkbox: boolean,
  discription: string,
}) {
  return (
    <table className="table-fixed mx-3 ">
      <tbody>
        <tr>
          <td className="w-1/12 px-5 text-xl text-center">{props.number}</td>
          {/* <td className="w-1/6 text-xl text-center">{props.job}</td> */}
          <td className="w-1/2 text-xl " >{props.discription}</td>
          <td className="w-1/12 text-3xl text-center">{props.checkbox} <button
          // onClick={prgress bar inc }
          ><AiFillCheckCircle /></button></td>
        </tr>
      </tbody>
    </table>
  )
}
