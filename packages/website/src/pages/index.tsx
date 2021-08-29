import Head from "next/head";
import React from "react";
// import ProgressBar from "../components/ProgressBar";
// import { useWrappedConn } from "../hooks/useConn";
import MyModal from "./login";

export default function Home() {

    //  const wrapper = useWrappedConn();

    //   wrapper.mutation.user.create(' ',' ').then((res)=>{
    //     if(!res.success) res.error
    //   })

    // wrapper.query.user.auth(' ',' ')
    // wrapper.mutation.todo.create(' ',[])
    // wrapper.mutation.todo.update(' ',' ',[])
    // wrapper.mutation.todo.delete(' ',)

    return (
        <div>
            <Head>
                <title>JassWind</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="text-gray-600 body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Company name</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    </nav>
                </div>
            </header>
            <div className="inset-0 flex items-center justify-center"> <div className="m-2"><MyModal pass="login" button="login" form="log in " title="" /> </div>
                <div className="m-2"><MyModal pass="sign up" button="sign up" form="sign up" title="" /></div>
            </div>
        </div>
    );
}
