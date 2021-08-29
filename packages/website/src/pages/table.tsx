import Head from "next/head";
import React from "react";
import ProgressBar from "../components/ProgressBar";
import {
    FC,
    DetailedHTMLProps,
    InputHTMLAttributes,
  } from "react"
  export type MyModalProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;




export default function Table(props: { title: string,progress: number, number: number ,name:string,job:string
//   , title2: string,className2:string,progress2: number, number2: number 
//  , title3: string,className3:string,progress3: number, number3: number 
//   ,title4: string,className4:string,progress4: number, number4: number 
//   , title5: string,className5:string,progress5: number, number5: number
 }){
return(
    <table className="table-fixed mx-3 ">
            <thead>
              <tr>
             <th className="w-1/9">{props.title}</th>
                {/*  <th className={props.className2}>{props.title2}</th>
                <th className={props.className3}>{props.title3}</th>
                <th className={props.className4}>{props.title4}</th>
                <th className={props.className5}>{props.title5}</th> */}
                {/* <th className="w-1/7 text-xl">Job </th>
                <th className="w-1/6 text-xl">Name </th>
                <th className="w-1/6 text-xl">Progress</th>
                <th className="w-1/2 text-xl">Discreption</th> */}

              </tr>
            </thead>
            <tbody>
              <tr>
                <td >{props.number}</td>
               
                <td className="text-center">{props.job}</td>
                <td className="text-center">{props.name}</td>
                <td><ProgressBar progress={props.progress} /></td>
                <td >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus mollitia fugit ipsum voluptatibus! Molestiae quis vero quam ratione consequatur earum, cupiditate ut sunt dicta quaerat dolorem et, officiis exercitationem?</td>

              </tr>
              {/* <tr className="">
                <td className="text-center">2.</td>
                <td className="text-center">Intro to CSS</td>
                <td className="text-center">employee</td>
                <td><ProgressBar progress={50} /></td>
                <td >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim exercitationem voluptatibus corporis velit fuga ea aliquid. Odit, provident! Blanditiis vero distinctio repudiandae deleniti ab porro maiores voluptas reiciendis autem.</td> */}

              {/* </tr> */}
              {/* <tr>
                <td className="text-center">3.</td>
                <td className="text-center">Intro to CSS</td>
                <td className="text-center">employee</td>
                <td><ProgressBar progress={75} /></td>
                <td >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae blanditiis, veritatis dolores, vero sequi rem dolorum voluptatum perferendis quasi totam, sit quia impedit veniam aut quisquam repellendus culpa assumenda?</td>

              </tr> */}
            </tbody>
          </table>
)
}
