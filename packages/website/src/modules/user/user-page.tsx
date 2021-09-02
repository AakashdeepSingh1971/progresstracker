import Head from "next/head";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";
import { Todo, TodoTask } from "@progresstracker/wrapper";
import { useEffect } from "react";
import { useWrappedConn } from "../../hooks/useConn";


export default function UserPage(props: { task: string, job: string }) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const wrapper = useWrappedConn();

    useEffect(() => {
        wrapper.subscribe.todo.added((todo) => {
            todo.data.tasks = Object.values(todo.data.tasks)
            setTodos((t) => t ? t.concat(todo.data) : [])
        })
        wrapper.subscribe.todo.update((todo) => {
            console.log(todo);
            todo.data.tasks = Object.values(todo.data.tasks)
            setTodos((t) => t.filter((to) => to.id !== todo.data.id));
            setTodos((t) => t ? t.concat(todo.data) : [])
        })
        wrapper.subscribe.todo.deleted((data) => {
            setTodos((t) => t.filter((todo) => todo.id !== data.data.id))
        })
    }, [])
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
                <div className="flex m-3">  </div><h2 className="m-3">Progress</h2>

                <div className="m-3 w-11/12  ">
                    <ProgressBar progress={50} type="user" />
                </div>
                <h2 className="m-3">Tasks</h2>
                {todos && todos.map((todo) => <Tasks todo={todo} key={todo.id} />)}

            </div>  </div>
    )

}
function Tasks(props: { todo: Todo }) {
    const [prog, setProg] = useState(0);
    const wrapper = useWrappedConn();

    useEffect(() => {
        const progress = (props.todo.tasks.filter((t) => t.completed == true).length / props.todo.tasks.length) * 100;
        setProg(progress)
    }, [props.todo])

    const completeAll = () => {
        const ids = props.todo.tasks.map((task) => task.id);
        const prog = []
        for (let index = 0; index < ids.length; index++) {
            const id = ids[index];
            prog.push({ taskId: id, completed: true })
        }
        wrapper.mutation.todo.updateProgress(props.todo.id, prog)
    }
    return (
        <div className=" p-2 mx-auto  rounded-2xl">
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="flex ">
                            <Disclosure.Button className="flex justify-between w-5/6 ml-3 px-4 text-xl py-2  font-medium text-left text-black bg-indigo-200 rounded-lg hover:bg-indigo-300 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-100">

                                <div className=" w-11/12 text-left  float-left">
                                    {props.todo.name}
                                </div>

                                <ProgressBar progress={prog} type="admin" className="mt-2" />

                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-12  h-8 float-right text-black`}
                                />
                            </Disclosure.Button>
                            <button onClick={completeAll} className="rounded-full w-12 h-12 ml-5 border-10 border-black hover:bg-red-300 bg-green-400 filter" >  </button>

                        </div>
                        <Disclosure.Panel className="px-4  py-2 text-sm  w-5/6 text-gray-500">
                            <table className=" w-full m-3">
                                <tbody className="  ">
                                    <tr>
                                        {props.todo.tasks.map((t) =>
                                            <SubTask task={t} key={t.id} todoId={props.todo.id} />
                                        )}
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



function SubTask(props: {
    todoId: string,
    task: TodoTask
}) {
    const wrapper = useWrappedConn();
    const completeTask = () => {
        const prog = [{ taskId: props.task.id, completed: !props.task.completed }]
        wrapper.mutation.todo.updateProgress(props.todoId, prog);
    }
    return (
        <>  <div className=" border-solid border-gray-300 mt-4  border-b-2 text-lg  mx-5" >{props.task.name}

            <button onClick={completeTask} className={`rounded-full w-5 h-5 ml-5 float-right border-10 border-black ${props.task.completed ? 'bg-green-400' : 'bg-red-300'}    filter`} >  </button>

        </div></>
    )
}