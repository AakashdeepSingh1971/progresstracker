import { FC, useEffect, useRef, useState } from "react";

type ProgressBarOpts = {
  progress?: number
}

const AdminProgressBar: FC<ProgressBarOpts> = ({ progress = 0 }) => {
  const barRef = useRef(null);
  const progressRef = useRef(null);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setProg((p) =>
        p < progress ? p + 0.75 : p
      );
    }, 10, 5000)
  }, [])

  useEffect(() => {
    console.log(progress)
  }, [progress])

  return (
    <div ref={barRef} className="flex m-0.5 h-4 mx-2  bg-gray-300 rounded-md ">
      <div ref={progressRef} className="bg-blue-600 rounded-md progressbar-bar h-4 " style={{
        width: `${prog}%`
      }}></div>
    </div>
  )
}

export default AdminProgressBar;


