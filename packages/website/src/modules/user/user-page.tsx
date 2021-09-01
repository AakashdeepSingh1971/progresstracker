import Head from "next/head";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import ProgressBar from "../../components/ProgressBar";
import { TrackChangesSharp } from "@material-ui/icons";
export default function UserPage(props: { task: string, job: string }) {


    const refresh = () => {
        console.log(refresh)
        // setSelectedUser("");
        setTimeout(() => {
            // setSelectedUser(selectedUser)
        }, 500)

    }
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
                        <a className="mr-5 hover:text-gray-900" href="/logout">Logout</a>
                    </nav>
                </div>
            </header>
            <div className="w-full">
                <div className="flex m-3">  </div><h2 className="m-3">Progress <button
                    type="button"
                    onClick={refresh}
                    className="px-4 py-2  float-right
                 text-sm font-medium rounded-lg bg-opacity-100 hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  text-white bg-indigo-600 "
                >  Refresh
                </button></h2>

                <div className="m-3 w-11/12  ">
                    <ProgressBar progress={50} type="user" />
                </div>
                <h2 className="m-3">Tasks</h2>
<Tasks task="dasa" job="fsdfsf"/>
<Tasks task="dasa" job="fsdfsf"/>
<Tasks task="dasa" job="fsdfsf"/>
<Tasks task="dasa" job="fsdfsf"/>
<Tasks task="dasa" job="fsdfsf"/>
<Tasks task="dasa" job="fsdfsf"/>
<Tasks task="dasa" job="fsdfsf"/>
            </div>  </div>
    )

}
function Tasks(props: { task: string, job: string }) {
    return(
    <div className=" p-2 mx-auto  rounded-2xl">
        <Disclosure>
            {({ open }) => (
                <>
                    <div className="flex ">
                        <Disclosure.Button className="flex justify-between w-5/6 px-4 text-xl py-2  font-medium text-left text-black bg-indigo-200 rounded-lg hover:bg-indigo-300 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-100">

                            <div className=" w-11/12 text-left  float-left">
                                {props.job} job

                            </div>

                            <ProgressBar progress={50} type="admin" className="mt-2" />

                            <ChevronUpIcon
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-12  h-8 float-right text-black`}
                            />
                        </Disclosure.Button>
                        <div className="rounded-full w-12 h-12 ml-5 border-10 border-black bg-red-300 hover:bg-green-400  filter" >  </div>

                    </div>
                    <Disclosure.Panel className="px-4  py-2 text-sm  w-5/6 text-gray-500">
                        <table className=" w-full m-3">
                            <tbody className="  ">
                                <tr>

                                    <SubTask task="nice work" />
                                    <SubTask task="nice work" />
                                    <SubTask task="nice work" />
                                    <SubTask task="nice work" />
                                    <SubTask task="nice work" />
                                    <SubTask task="nice work" />
                                  
                                </tr>
                            </tbody>

                        </table>


                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    </div>

    )


    // {/* <UserTask todo="todo" username={"selectedtUsername"} key={todo.id} />)} */}
}



function SubTask(props: {
    // task: TodoTask
    task: string
}) {
    return (
        <>  <div className=" border-solid border-gray-300 mt-4  border-b-2 text-lg  mx-5" >{props.task}dfsfs
        {/* // key={`${props.task.id}-${props.task.name}`} >{props.task.name}{props.task.completed} */}

        {/* <div className={`rounded-full w-5 h-5 mr-2 float-right border-2 border-gray-400
${props.task.completed ? 
"bg-green-400 border-none filter" : ""}`}> </div> */}
        <div className="rounded-full w-5 h-5 ml-5 float-right border-10 border-black bg-red-300 hover:bg-green-400  filter" >  </div>

    </div></>
    )
}