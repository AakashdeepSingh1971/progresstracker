import { FC, useRef } from "react";

type ProgressBarOpts = {
    progress?: number
}

const ProgressBar: FC<ProgressBarOpts> = ({ progress = 0 }) => {
    const barRef = useRef(null);
    const progressRef = useRef(null);

    return (
        <div ref={barRef} className="flex h-4">
            <div ref={progressRef} className="bg-blue-600" style={{
                width: `${progress}%`
            }}></div>
        </div>
    )
}

export default ProgressBar;