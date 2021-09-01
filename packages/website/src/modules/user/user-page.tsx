import Head from "next/head";
import React, { useEffect } from "react";
import UserProgressBar from "../../components/ProgressBar";
import { useWrappedConn } from "../../hooks/useConn";
import { FC } from "react";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Todo, TodoTask, User } from "../../../../wrapper/lib";
import ProgressBar from "../../components/ProgressBar";
import Update from "../../components/update";
export default function UserPage() {
   

    const refresh = () => {
        console.log(refresh)
        // setSelectedUser("");
        setTimeout(() => {
            // setSelectedUser(selectedUser)
        }, 500)
const todo="lol"
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
                    </nav>
                </div>
            </header>
            <div className="w-full">
                <div className="flex m-3">  </div><h2 className="m-3">Progress</h2>
                <button
                            type="button"
                            onClick={refresh}
                            className="px-4 py-2  float-right
                 text-sm font-medium rounded-lg bg-opacity-100 hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  text-white bg-indigo-600 "
                        >  Refresh
                        </button>
                <div className="m-3 w-11/12  ">
                    <UserProgressBar progress={50} type="user" />
                </div>
                <h2 className="m-3">Tasks</h2>
                
                <UserTask todo="todo" username={"selectedtUsername"} key={todo.id} />)}

            </div>
        </div >

    );
}



function UserTask(props: {
    todo: string,
    username: string

}) {
   

    return (
        <div className=" p-2 mx-auto  rounded-2xl">
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="flex ">
                            <Disclosure.Button className="flex justify-between w-5/6 px-4 text-xl py-2  font-medium text-left text-black bg-indigo-200 rounded-lg hover:bg-indigo-300 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-100">

                                <div className=" w-11/12 text-left  float-left">
                                    {props.todo}
                                </div>
                                <ProgressBar progress={80} type="admin" className="mt-2" />


                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-12  h-8 float-right text-black`}
                                />
                            </Disclosure.Button>
                            {/* <Update {props.todo} username={props.username}  */}
                                
                            />
                            <button onClick={deleteTodo} className=" inline-flex float-right justify-center px-4 m-2 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500  " >Delete </button>
                        </div>
                        <Disclosure.Panel className="px-4  py-2 text-sm  w-5/6 text-gray-500">
                            <table className=" w-full m-3">
                                <tbody className="table-fixed w-full  ">
                                    <tr>
                                        {props.todo.tasks && props.todo.tasks.map((task) => <SubTask task={task} />)}

                                    </tr>
                                </tbody>
                                <Update todo={props.todo} username="  "
                                // selectedUser={selectedUser}

                                />
                            </table>

                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

        </div>


    )

}
export interface ResultsProps extends React.HTMLAttributes<HTMLDivElement> {
    selectedtUsername?: string;
    username: string;
}
function SubTask(props: {
    task: TodoTask
}) {
    return (
        <div className=" border-solid border-gray-300 mt-4  border-b-2 text-lg  mx-5" key={`${props.task.id}-${props.task.name}`} >{props.task.name}{props.task.completed}

            <div className={`rounded-full w-5 h-5 mr-2 float-right border-2 border-gray-400 ${props.task.completed ? "bg-green-400 border-none filter" : ""}`}> </div>

        </div>
    )
}
const Results: FC<ResultsProps> = ({
    selectedtUsername,
    username,
}) => {
    const [todos, setTodos] = useState<Todo[]>()
    const wrapper = useWrappedConn();
    useEffect(() => {
        wrapper.query.user.getTodos(username).then((resp) => {
            if (!resp.success) console.error(resp.error);
            if (resp.success) setTodos(resp.data);
        })
    }, [selectedtUsername])
    return (

        <div id="results" className={`m-3 ${selectedtUsername !== username ? 'hidden' : ''}`}>

            <div id="myDIV" >
                <div className="  ">
                    <div className="m-5 text-2xl w-3 font-bold ">{username}</div>

                    {todos && todos.map((todo) => <UserTask todo={todo} username={"selectedtUsername"} key={todo.id} />)}

                </div>
            </div>


        </div>
    )
}