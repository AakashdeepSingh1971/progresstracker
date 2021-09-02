import { Dialog, Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react"
import { useWrappedConn } from '../hooks/useConn';
export type MyModalProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Todo } from '@progresstracker/wrapper';
export default function Update(props: { todo: Todo, username: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [taskName, setTaskName] = useState("");
  const [todo, setTodo] = useState<Todo>(props.todo);
  const [selectedTask, setSelectedTask] = useState("");

  const wrapper = useWrappedConn();


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const submit = () => {
    const task = props.todo.tasks.find((t) => t.id == selectedTask)
    if (!task) return;
    task.name = taskName;
    props.todo.tasks = props.todo.tasks.filter((t) => t.id !== selectedTask);
    props.todo.tasks.push(task);

    wrapper.mutation.todo.update(props.username, todo.id, todo.name, todo.tasks).then((resp) => {
      if (!resp.success) console.error(resp.error)
      if (resp.success) closeModal();
    })
  }




  return (
    <>

      <button
        type="button"
        onClick={openModal}
        className="inline-flex float-right justify-center px-4 m-2 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 "
      >
        Update
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
                        Update job
                      </h1>

                      <form >
                        <div >
                          <label>Subtasks</label>
                          {/* the selecter  */}
                          <div>
                            <div className="w-70   top-16">
                              <Listbox value={selectedTask} onChange={(v) => { setSelectedTask(v) }} >
                                <div className="relative mt-1">
                                  <Listbox.Button className="relative border-solid h-10 overflow-y-auto border-gray-500 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                    <span className="block truncate">{props.todo.tasks.find((t) => t.id == selectedTask)?.name}</span>
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
                                      {todo && todo.tasks.map((task) => (
                                        <Listbox.Option
                                          key={task.id}
                                          className={({ active }) =>
                                            `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                          }
                                          value={task.id}
                                        >
                                          {({ selected, active }) => (
                                            <>
                                              <span
                                                className={`${selected ? 'font-medium  ' : 'font-normal p-1 rounded-md hover:bg-gray-200 '
                                                  } block truncate`}
                                              >
                                                {task.name}
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
                              value={taskName}
                              onChange={(e) => setTaskName(e.target.value)}
                              type='work'
                              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                              id='work'
                              placeholder='job title'
                            />
                          </div>

                        </div>

                        <div className='flex justify-center items-center mt-6'>
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={submit}
                          >
                            Update
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
