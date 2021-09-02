import Head from "next/head";
import React from "react";
import LogIn from "./login";
import SignUp from "./signup";

export default function Home() {
    return (
        <div>
            <Head>
                <title>login</title>
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
            <div className="inset-0 flex items-center justify-center"> <div className="m-2"> <LogIn/> </div>
                <div className="m-2"><SignUp/></div>
            </div>
        </div>
    );
}
