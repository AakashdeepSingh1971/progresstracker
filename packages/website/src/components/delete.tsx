import { Dialog, Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { useEffect } from 'react';
import {
    // FC,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from "react"
import { TodoTask } from '../../../wrapper/lib';
import { useWrappedConn } from '../hooks/useConn';
export type MyModalProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
export default function Delete(props: { pass: string, button: string, form: string, selectedUser: string }) {

    const people = [
        { name: 'Wade Cooper' },
        { name: 'Arlene Mccoy' },
        { name: 'Devon Webb' },
        { name: 'Tom Cook' },
        { name: 'Tanya Fox' },
        { name: 'Hellen Schmidt' },
    ]


    const [selected, setSelected] = useState(people[0])


    const [isOpen, setIsOpen] = useState(false)
    const [username, setUsername] = useState("");
    const [todoName, setTodoName] = useState("");
    const [subtaskName, setSubtaskName] = useState("");
    const [subtasks, setSubtasks] = useState<TodoTask[]>();
    const wrapper = useWrappedConn();

    useEffect(() => {
        setUsername(props.selectedUser)
    }, [props.selectedUser])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    props: {

        const submit = () => {
            wrapper.mutation.todo.create(username, todoName, subtasks ? subtasks : []).then((resp) => {
                if (!resp.success) console.error(resp.error);
                if (resp.success) closeModal();
            })
        }

        const addSubtask = () => {
            const task = { name: subtaskName, completed: false };
            setSubtasks((t) => t ? t.concat(task) : [task])
        }


        return (
            <>

                <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex float-right justify-center px-4 m-2 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 "
                >
                    {props.pass}
                </button>


                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <div className="mt-2">
                                        <div className=' flex bg-gray-bg1'>
                                            <div className='w-full  max-w-md m-auto bg-white rounded-lg border border-primary Border shadow-default py-10 px-16'>
                                                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                                                    {props.form}
                                                </h1>

                                                <form >
                                                    <div>
                                                        <label htmlFor='user'>User</label>
                                                        <input
                                                            value={username}
                                                            onChange={(e) => setUsername(e.target.value)}
                                                            type='user'
                                                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                                            id='user'
                                                            placeholder='user'
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor='work'>Job</label>
                                                        <input
                                                            value={todoName}
                                                            onChange={(e) => setTodoName(e.target.value)}
                                                            type='work'
                                                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                                            id='work'
                                                            placeholder='job title'
                                                        />
                                                    </div>

                                                    <div >
                                                        <label>Subtasks</label>
                                                        {/* the selecter  */}
                                                        <div>
                                                            <div className="w-70   top-16">
                                                                <Listbox value={selected} onChange={setSelected}>
                                                                    <div className="relative mt-1">
                                                                        <Listbox.Button className="relative border-solid overflow-y-auto border-gray-500 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                                            <span className="block truncate">{selected.name}</span>
                                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                                <SelectorIcon
                                                                                    className="w-5 h-5 text-gray-400"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>
                                                                        <Transition
                                                                            as={Fragment}
                                                                            leave="transition ease-in duration-100"
                                                                            leaveFrom="opacity-100"
                                                                            leaveTo="opacity-0"
                                                                        >
                                                                            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-40 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                {people.map((person, personIdx) => (
                                                                                    <Listbox.Option
                                                                                        key={personIdx}
                                                                                        className={({ active }) =>
                                                                                            `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                                                                        }
                                                                                        value={person}
                                                                                    >
                                                                                        {({ selected, active }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`${selected ? 'font-medium  ' : 'font-normal p-1 rounded-md hover:bg-gray-200 '
                                                                                                        } block truncate`}
                                                                                                >
                                                                                                    {person.name}
                                                                                                </span>
                                                                                                {selected ? (
                                                                                                    <span
                                                                                                        className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                                                                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                                                                    >
                                                                                                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                                                                    </span>
                                                                                                ) : null}
                                                                                            </>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                ))}
                                                                            </Listbox.Options>
                                                                        </Transition>
                                                                    </div>
                                                                </Listbox>
                                                            </div>
                                                        </div>
                                                        <div className="mt-5">
                                                        <label htmlFor='work'>Job</label>
                                                        <input
                                                            value={todoName}
                                                            onChange={(e) => setTodoName(e.target.value)}
                                                            type='work'
                                                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                                            id='work'
                                                            placeholder='job title'
                                                        />
                                                    </div>
                                                        <div>
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center px-4 ml-5 mt-4 mr-16 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                                onClick={addSubtask}
                                                            >
                                                                Update
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center px-4  py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                                onClick={addSubtask}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                        {subtasks && subtasks.map((t) => <p>{t.name}</p>)}
                                                    </div>

                                                    <div className='flex justify-center items-center mt-6'>
                                                        <button
                                                            type="button"
                                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                            onClick={closeModal}
                                                        >
                                                            {props.button}
                                                        </button>
                                                        
                                                    </div>
                                                   
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </>
        )
    }
}
