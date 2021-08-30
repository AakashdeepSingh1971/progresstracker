import Head from "next/head";
import React, { useState } from "react";
import AdminProgressBar from "../components/AdminProgressBar";
import { useWrappedConn } from "../hooks/useConn";
import MyModal from "../components/AddTodo";
import { FC } from "react";
import { Todo, User } from "@progresstracker/wrapper";
import { useEffect } from "react";


export default function Home() {
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


  const refresh = () => {
    let prev = "";
    setSelectedUser((c) => {
      prev = c;
      return "";
    });
    setSelectedUser(prev)
  }




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
          </nav>
        </div>
      </header>
      <div className="flex h-full mt-10">
        <div className="w-1/4 sticky-right-0 shadow-lg" >
          {users && users.map((u) => <UserCard key={u.username} username={u.username} setSelectedUser={setSelectedUser} />)}
        </div>
        <div className=" w-3/4  ">
          <div className="flex m-3"> <h2>Employee status </h2> </div>
          {users && users.map((u) => <Results key={u.username} username={u.username} selectedtUsername={selectedUser} />)}
        </div>
        <div className="m-4">
          <div className="float-right text-gray-600">
            <div >
              <button
                type="button"
                onClick={refresh}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-opacity-100 hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  text-white bg-indigo-600 "
              >
                Refresh
              </button>
              <MyModal pass="ADD" button="ADD" form="Add job" selectedUser={selectedUser} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


function Row(props: {
  job: string,
  number: number,
  prog: number,
  discription: string,
  delete: boolean,
  className?: string,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <tr className={props.className} onClick={() => setIsOpen((o) => !o)}>
      <td className="w-1/12 px-5 text-xl text-center ">{props.number}</td>
      <td className="w-1/6 text-xl text-center">{props.job}</td>
      <td className="w-1/4  text-xl text-center" >{<AdminProgressBar progress={props.prog} />}</td>
      <td className="w-1/4  text-xl " >{props.discription}</td>
      <td className="w-1/12 text-3xl text-center ">{props.delete} <button
      // onClick={prgress bar inc }
      > <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg></button></td>
      {isOpen ?
        <tr className={props.className}>
          <td>aaaa</td>
          <td>bbbb</td>
          <td>cccc</td>
          <td>dddd</td>
          <td>eeee</td>  </tr> : null}

    </tr>



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
        <div className="  flex flex-col">
          <div className="m-5 text-2xl font-bold ">{username}</div>
          <table>
            <thead className="table-fixed mx-3 ">
              <tr>
                <th className="w-1/12 text-xl text-center ">Job no</th>
                <th className="w-1/6 text-xl text-center ">Job </th>
                <th className="w-1/4 text-xl text-center pr-12">Progress</th>
                <th className="w-1/4 text-xl text-center ">Discreption</th>
              </tr>
            </thead>
            <tbody className="table-fixed mx-3" >
              {todos && todos.map((t) => <Row prog={30} number={1} delete={true} job={t.name} key={t.id} discription="" />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}