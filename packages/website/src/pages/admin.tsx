import Head from "next/head";
import React from "react";
import ProgressBar from "../components/ProgressBar";
import { useWrappedConn } from "../hooks/useConn";
import MyModal from "./addsub";

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


            <span className="ml-3 text-xl">Company name</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="/">Home</a>
            <a className="mr-5 hover:text-gray-900" href="/user">User</a>

          </nav>

        </div>
      </header>
      <div className="flex h-screen mt-10">
        <div className="w-1/4 sticky-right-0 shadow-lg" >
          <div className="m-4">
            <div className=" "></div>
            <div>      <div className=" float-right bg-indigo-400 rounded-lg "><MyModal  pass="Delete" button="Delete" form="Delete job" title=" " /> </div>
              {/* <button className=" float-right hover:bg-blue-100 m-2 p-1 rounded-lg " > Delete
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </button> */}
          <div className=" float-left bg-indigo-600 rounded-lg "><MyModal  pass="ADD" button="ADD" form="Add job" title="" /> </div>
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
                <th className="w-1/7 text-xl">Job </th>
                <th className="w-1/6 text-xl">Name </th>
                <th className="w-1/6 text-xl">Progress</th>
                <th className="w-1/2 text-xl">Discreption</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1.</td>
                <td className="text-center">Intro to CSS</td>
                <td className="text-center">employee</td>
                <td><ProgressBar progress={30} /></td>
                <td >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus mollitia fugit ipsum voluptatibus! Molestiae quis vero quam ratione consequatur earum, cupiditate ut sunt dicta quaerat dolorem et, officiis exercitationem?</td>

              </tr>
              <tr className="">
                <td className="text-center">2.</td>
                <td className="text-center">Intro to CSS</td>
                <td className="text-center">employee</td>
                <td><ProgressBar progress={50} /></td>
                <td >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim exercitationem voluptatibus corporis velit fuga ea aliquid. Odit, provident! Blanditiis vero distinctio repudiandae deleniti ab porro maiores voluptas reiciendis autem.</td>

              </tr>
              <tr>
                <td className="text-center">3.</td>
                <td className="text-center">Intro to CSS</td>
                <td className="text-center">employee</td>
                <td><ProgressBar progress={75} /></td>
                <td >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae blanditiis, veritatis dolores, vero sequi rem dolorum voluptatum perferendis quasi totam, sit quia impedit veniam aut quisquam repellendus culpa assumenda?</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

