import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";

import { Connection, connect, UserRole } from "@progresstracker/wrapper"
import { wsUrl } from "../../lib/constants";
import { useAuthStore } from "../auth/useAuthStore";

type V = Connection | null;

export const WebSocketContext = React.createContext<{
    conn: V;
    authed: boolean,
    setConn: (u: Connection | null) => void;
    setAuthed: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    conn: null,
    authed: false,
    setConn: () => { },
    setAuthed: () => { }
});

export const WebSocketProvider: React.FC = ({ children }) => {
    const [conn, setConn] = useState<V>(null);
    const { pathname, replace } = useRouter();
    const isConnecting = useRef(false);
    const [authed, setAuthed] = useState(false);
    const hasAuth = useAuthStore((s) => s.password && s.username);
    const router = useRouter()

    const onAuth = (resp: any) => {
        if (resp.success) {
            setAuthed(true);
            if (pathname === "/") {
                if (resp.user.role == UserRole.USER) router.push("/user")
                if (resp.user.role == UserRole.ADMINISTRATOR) router.push("/admin")
            }
        }
        if (!resp.success) if (pathname !== "/signup" && pathname !== "/") replace("/");
    }


    useEffect(() => {
        if (!conn && !isConnecting.current) {
            isConnecting.current = true;

            const params: {
                url?: string;
                auth?: { username: string, password: string };
                onAuth?: (data: unknown) => void;
            } = { url: wsUrl };

            if (hasAuth) {
                const password = useAuthStore.getState().password;
                const username = useAuthStore.getState().username;
                params.auth = { password, username }
                params.onAuth = onAuth;
            }

            connect(params)
                .then((x) => {
                    setConn(x);
                })
                .catch((err) => {
                    if (err.code === 4001) {
                        replace(`/?next=${window.location.pathname}`);
                    }
                })
                .finally(() => {
                    isConnecting.current = false;
                });
        }
    }, [conn, replace]);

    useEffect(() => {
        if (!conn) {
            return;
        }
    }, [conn]);


    return (
        <WebSocketContext.Provider
            value={useMemo(
                () => ({
                    conn,
                    authed,
                    setConn,
                    setAuthed
                }),
                [conn, authed]
            )}
        >
            {children}
        </WebSocketContext.Provider>
    );
};