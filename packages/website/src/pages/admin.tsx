import Head from "next/head";
import React, { useState } from "react";
import AdminProgressBar from "../components/AdminProgressBar";
import { useWrappedConn } from "../hooks/useConn";
import MyModal from "../components/addsub";
import { FiDelete } from "react-icons/fi";
import { FC } from "react";


export default function Home() {
  const wrapper = useWrappedConn();
  const [username, setUsername] = useState("")
  const [password, setPasword] = useState("")

  const [selectedUser, setSelectedUser] = useState("");




  const submit = (e: any) => {
    e.preventDefault();

    console.log(username, password);
    wrapper.query.user.auth(username, password).then((resp) => {
      console.log(resp)
      if (!resp.success) console.log(resp.error);

    })
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
            <a className="mr-5 hover:text-gray-900" href="/user">User</a>
          </nav>
        </div>
      </header>
      <div className="flex h-full mt-10">
        <div className="w-1/4 sticky-right-0 shadow-lg" >
          <UserCard username="r1" setSelectedUser={setSelectedUser} />
          <UserCard username="r2" setSelectedUser={setSelectedUser} />
          <UserCard username="r3" setSelectedUser={setSelectedUser} />
          <UserCard username="r4" setSelectedUser={setSelectedUser} />
        </div>
        <div className=" w-3/4  ">
          <div className="flex m-3"> <h2>Employee status </h2> </div>

          <Results username="r1" selectedtUsername={selectedUser} />
          <Results username="r2" selectedtUsername={selectedUser} />
          <Results username="r3" selectedtUsername={selectedUser} />
          <Results username="r4" selectedtUsername={selectedUser} />

        </div>
        <div className="m-4">
          <div className="float-right text-gray-600">
            <div className=" text-white bg-indigo-600 rounded-lg">
              <MyModal pass="ADD" button="ADD" form="Add job" title="" />
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
}) {
  return (

    <tr>
      <td className="w-1/12 px-5 text-xl text-center ">{props.number}</td>
      <td className="w-1/6 text-xl text-center">{props.job}</td>
      <td className="w-1/4  text-xl text-center" >{<AdminProgressBar progress={props.prog} />}</td>
      <td className="w-1/4  text-xl " >{props.discription}</td>
      <td className="w-1/12 text-3xl text-center ">{props.delete} <button
      // onClick={prgress bar inc }
      ><FiDelete /></button></td>
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
}) => (
  <div id="results" className={`m-3 ${selectedtUsername !== username ? 'hidden' : ''}`}>
    <div id="myDIV">
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
          <tbody className="table-fixed mx-3">
            <Row prog={30} number={1} delete={true} job="job1" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={2} delete={true} job="job2" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={3} delete={true} job="job3" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={4} delete={true} job="job4" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={5} delete={true} job="job5" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={6} delete={true} job="job6" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={2} delete={true} job="job7" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={2} delete={true} job="job8" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={2} delete={true} job="job9" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={2} delete={true} job="job10" discription="word word word word word word word word word word word word wordwordword " />
            <Row prog={90} number={2} delete={true} job="job11" discription="word word word word word word word word word word word word wordwordword   " />
          </tbody>
        </table>
      </div>
    </div>
  </div>
)