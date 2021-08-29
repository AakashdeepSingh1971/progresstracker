import Head from "next/head";
import React from "react";
import ProgressBar from "./ProgressBar";
import {
  FC,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react"
export type MyModalProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;




export default function Table(props: {
  prog: number, number: number, name: string, job: string, discription: string
}) {
  return (
    <table className="table-fixed mx-3 ">
      <tbody>
        <tr>
          <td className="w-1/9 text-xl text-center">{props.number}</td>
          <td className="w-1/7 text-xl text-center">{props.job}</td>
          <td className="w-1/6 text-xl text-center">{props.name}</td>
          <td className="w-1/6 text-xl text-center" ><ProgressBar progress={props.prog} /></td>
          <td className="w-1/2 text-xl " >{props.discription}</td>
        </tr>
      </tbody>
    </table>
  )
}
