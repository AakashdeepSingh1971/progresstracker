import Head from "next/head";
import React, {
  // useEffect, useState
} from "react";
import UserProgressBar from "../components/UserProgressBar";
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
      <div className="w-full">
        <div className="flex m-3"> <h2> </h2> </div><h2 className="m-3">Progress</h2>
        <div className="m-3 w-11/12  ">
          <UserProgressBar progress={50} />
        </div>
        <h2 className="m-3">Tasks</h2>
        <table className="table-fixed mx-3 ">
          <tbody>
          <Table
            number={1} checkbox={true} job="jas" discription="aakash1 akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          <Table number={2} checkbox={true} job="jass2" discription="aakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          <Table number={2} checkbox={true} job="jass2" discription="aakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          <Table number={2} checkbox={true} job="jass2" discription="aakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          <Table number={2} checkbox={true} job="jass2" discription="aakash  akkakakak akkakakakaaakashakkakakak akkakakakaaakashakkakakak akkakakakaaakashakkakakak akkakakakaaakashakkakakak akkakakakaaakashakkakakak akkakakakaaakashakkakakak akkakakakaaakashakkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          <Table number={2} checkbox={true} job="jass2" discription="aakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          <Table number={2} checkbox={true} job="jass2" discription="aakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak akkakakakaaakash akkakakak " />
          </tbody>
    </table>
    </div>
      </div >
    
  );
}

function Table(props: {
  job: string,
  number: number,
  checkbox: boolean,
  discription: string,
}) {
  return (

    <tr>
      <td className="w-1/12 px-5 text-xl text-center border-b-2 ">{props.number}</td>
      <td className="w-1/6 text-xl border-b-2 ">{props.job}</td>
      <td className="w-1/4 text-xl border-b-2 " >{props.discription}</td>
      <td className="w-1/12 text-3xl text-center border-b-2 ">{props.checkbox} <button
      // onClick={prgress bar inc }
      ><AiFillCheckCircle /></button></td>
    </tr>

  )
}
