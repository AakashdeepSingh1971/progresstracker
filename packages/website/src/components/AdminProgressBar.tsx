import { FC, useEffect, useRef, useState } from "react";

type ProgressBarOpts = {
  progress?: number
}

const AdminProgressBar: FC<ProgressBarOpts> = ({ progress = 0 }) => {
  const barRef = useRef(null);
  const progressRef = useRef(null);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    if (progress == 0) return;
    setInterval(() => {
      setProg((p) =>
        p < progress ? p + 0.75 : p
      );
    }, 10, 5000)
  }, [progress])


  return (
    <div className="flex m-0.5 h-4 mx-2 float-right w-full "> 
    <div ref={barRef} className=" m-0.5 h-4 mx-2 w-3/4 bg-indigo-100 rounded-md ">
      <div ref={progressRef} className="bg-blue-600 rounded-md progressbar-bar h-4 " style={{
        width: `${prog}%`
      }}></div>
    </div>
    </div>
  )
}

export default AdminProgressBar;


