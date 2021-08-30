import Head from "next/head";
import React, { useState } from "react";
import AdminProgressBar from "../../components/AdminProgressBar";
import { useWrappedConn } from "../../hooks/useConn";
import MyModal from "../../components/AddTodo";
import { FC } from "react";
import { Todo, TodoTask, User } from "@progresstracker/wrapper";
import { useEffect } from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'


export default function AdminPage() {
    const wrapper = useWrappedConn();
    const [selectedUser, setSelectedUser] = useState("");
    const [users, setUsers] = useState<User[]>();


    useEffect(() => {
        if (!wrapper.connection) return;
        wrapper.query.admin.getUsers().then((resp) => {
            if (!resp.success) console.error(resp.error);
            if (resp.success) setUsers(resp.data);
        })
    }, [wrapper.connection])

    useEffect(() => { console.log(selectedUser) }, [selectedUser])


    const refresh = () => {
        setSelectedUser("");
        setTimeout(() => {
            setSelectedUser(selectedUser)
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
                    </nav>
                </div>
            </header>
            <div className="flex h-full mt-10">
                <div className="w-1/4 sticky-right-0 shadow-lg" >
                    {users && users.map((u) => <UserCard key={u.username} username={u.username} setSelectedUser={setSelectedUser} />)}
                </div>
                <div className=" w-3/4  ">
                    <div className="  m-3"> <h2>Employee status
                        <button
                            type="button"
                            onClick={refresh}
                            className="px-4 py-2  float-right
                 text-sm font-medium rounded-lg bg-opacity-100 hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  text-white bg-indigo-600 "
                        >
                            Refresh
                        </button>
                        <MyModal pass="Add" button="Add" form="Add job" selectedUser={selectedUser} />
                    </h2>

                    </div>
                    {users && users.map((u) => <Results key={u.username} username={u.username} selectedtUsername={selectedUser} />)}
                </div>
            </div>
        </div>
    )
}


function UserCard(
    props: { username: string, setSelectedUser: React.Dispatch<React.SetStateAction<string>> }) {
    const onClick = () => props.setSelectedUser(props.username);
    return (
        <div className="m-5 text-lg  ">
            <button type="submit" value="submit" onClick={onClick} className=" text-left w-full border-b-2 bg-blue-100 rounded-lg p-2 hover:bg-blue-200 ">
                {props.username}
            </button>

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
        <div className=" border-solid border-gray-300 mt-4 w-full  border-b-2 text-lg  mx-5" key={`${props.task.id}-${props.task.name}`} >{props.task.name}{props.task.completed}
        <div className={`rounded-full w-5 h-5 float-right border-2 border-gray-400 ${props.task.completed?"bg-green-500":""}`}></div>
        </div>
    )
}
function UserTask(props: {
    todo: Todo

}) {
    props.todo.tasks = Object.values(props.todo.tasks);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const prog = (props.todo.tasks.filter((t) => t.completed == true).length / props.todo.tasks.length) * 100;
        setProgress(prog)
    }, [props.todo.tasks])

    return (
        <div className="w-full  p-2 mx-auto bg-white rounded-2xl">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-3/4 px-4 py-2 text-sm font-medium text-left text-black bg-indigo-200 rounded-lg hover:bg-indigo-300 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-100">
                            <span>{props.todo.name}</span>
                            <AdminProgressBar progress={progress} />
                            <ChevronUpIcon
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-white`}
                            />
                        </Disclosure.Button>


                        <Disclosure.Panel className="px-4  py-2 text-sm  w-4/6 text-gray-500">
                            <br></br>
                            <table className=" w-full m-3">
                                <tbody className="table-fixed w-full  ">
                                    <tr>
                                        {props.todo.tasks && props.todo.tasks.map((task) => <SubTask task={task} />)}
                                    </tr>
                                </tbody>
                            </table>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

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
                    <div className="m-5 text-2xl font-bold ">{username}</div>

                    {todos && todos.map((todo) => <UserTask todo={todo} key={todo.id} />)}

                </div>
            </div>


        </div>
    )
}