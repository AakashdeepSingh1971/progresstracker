import { Transition, Dialog } from "@headlessui/react";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  Fragment,
  useState,
} from "react"
import { useWrappedConn } from "../hooks/useConn";
import { useAuthStore } from "../modules/auth/useAuthStore";
export type MyModalProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPasword] = useState("")

  const wrapper = useWrappedConn();



  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const submit = (e: any) => {
    e.preventDefault();

    wrapper.mutation.user.create(username, password).then((resp) => {
      if (resp.success) useAuthStore.getState().setAuth({ token: resp.token, username })
      if (!resp.success) console.error(resp.error);
    })
  }


  return (
    <>
      <div className=" ">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Sign up
        </button>
      </div>

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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900">
                  Sign up
                </Dialog.Title>
                <div className="mt-2">
                  <div className=' flex bg-gray-bg1'>
                    <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                      <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                        Create your account 🔐
                      </h1>
                      <form onSubmit={submit}>
                        <div>
                          <label htmlFor='username'>username</label>
                          <input value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                            type='username'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='username'
                            placeholder='Your username' />
                        </div>
                        <div>
                          <label htmlFor='password'>Password</label>
                          <input
                            value={password}
                            onChange={(e) => { setPasword(e.target.value) }}
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password' />
                        </div>
                        <div className='flex justify-center items-center mt-6'>
                          <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={submit}>
                            Sign up
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
