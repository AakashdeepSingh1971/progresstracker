import { FC } from "react"
import { useConnContext } from "../../hooks/useConn"

export const WaitForAuth: FC = ({ children }) => {
    const connContext = useConnContext();

    if (!connContext.conn) return (
        <div>
            <p>Loading</p>
        </div>
    )

    if (!connContext.authed) return (
        <div>
            <p>Loading</p>
        </div>
    );

    return (
        <div className="w-full h-full" >
            {children}
        </div>
    )
}
