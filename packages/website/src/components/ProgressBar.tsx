import { FC, useEffect, useRef, useState } from "react";

type ProgressBarOpts = {
    progress?: number
}

const ProgressBar: FC<ProgressBarOpts> = ({ progress = 0 }) => {
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

    return (
        <div ref={barRef} className="flex h-3 m-0.5 w-5/6 bg-gray-300 rounded-md ">
            <div ref={progressRef} className="bg-blue-600 rounded-md progressbar-bar h-3" style={{
                width: `${prog}%`
            }}></div>
        </div>
    )
}

export default ProgressBar;