import { FC, useEffect, useRef, useState } from "react";

type ProgressBarOpts = {
  progress?: number
  type: 'admin' | 'user';
  className?: string;
}

const barTypes = {
  user: 'flex m-0.5 h-5 w-5/7 bg-gray-300 rounded-md ',
  admin: 'm-0.5 h-4 mx-2 w-3/4 bg-indigo-100 rounded-md'
}

const ProgressBar: FC<ProgressBarOpts> = ({ progress = 0, type, className = "" }) => {
  const barRef = useRef(null);
  const progressRef = useRef(null);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setProg((p) =>
        p < progress ? p + 0.75 : p
      );
    }, 10, 5000);
  }, [progress])

  return (
    <div ref={barRef} className={`${type == 'user' ? barTypes.user : barTypes.admin} ${className}`}>
      <div ref={progressRef} className="bg-blue-600 rounded-md progressbar-bar h-5  " style={{
        width: `${prog}%`
      }}></div>
    </div>
  )
}

export default ProgressBar;