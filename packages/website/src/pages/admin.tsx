import Head from "next/head";
import React from "react";
import ProgressBar from "../components/ProgressBar";
import { useWrappedConn } from "../hooks/useConn";
import MyModal from "./popup";

export default function Home() {

//  const wrapper = useWrappedConn();

//   wrapper.mutation.user.create('','').then((res)=>{
//     if(!res.success) res.error
//   })

  // wrapper.query.user.auth('','')

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


            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="/">Home</a>

          </nav>

        </div>
      </header>
      <div className="flex h-screen mt-10">
        <div className="w-1/4 sticky-right-0 shadow-lg" >
          <div className="m-4">
            <div className=" "></div>
            <div>      <div className="m-2 float-right"><MyModal  pass="Delete" button="login" form="log in " title="login karo" /> </div>
              {/* <button className=" float-right hover:bg-blue-100 m-2 p-1 rounded-lg " > Delete
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </button> */}
          <div className="m-2"><MyModal  pass="ADD" button="login" form="log in " title="login karo" /> </div>
          {/* <button className=" hover:bg-blue-100 m-2 p-1 rounded-lg "> <svg xmlns="http://www.w3.org/2000/svg " className="h-9 w-9 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg> 
          </button>   */}
          </div>
            <div></div>
            <div></div>
            <div></div>

          </div>
        </div>
        <div className=" w-3/4  ">
          
      
          <div className="flex m-3"> <h2>Employee status </h2> </div>

          <table className="table-fixed mx-3 ">
            <thead>
              <tr>
                <th className="w-1/9 text-xl ">Job No.</th>
                <th className="w-1/4 text-xl">Name </th>
                <th className="w-1/6 text-xl">Progress</th>
                <th className="w-1/2 text-xl">Discreption</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1.</td>
                <td className="text-center">Intro to CSS</td>
                <td><ProgressBar progress={30} /></td>
                <td >bsdjawfsejfjsehaf eajfbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawjaefawk</td>

              </tr>
              <tr className="">
                <td className="text-center">2.</td>
                <td className="text-center">Intro to CSS</td>
                <td><ProgressBar progress={50} /></td>
                <td >disreajfbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawjaefawkip</td>

              </tr>
              <tr>
                <td className="text-center">3.</td>
                <td className="text-center">Intro to CSS</td>
                <td><ProgressBar progress={75} /></td>
                <td >disreajfbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawbsdjawfsejfjsehaf eajfjaefawjaefawkip</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
            <a href="https://twitter.com/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
          </p>

        </div>
      </footer>
    </div>
  );
}

