import { useRouter } from "next/router";
import { useEffect } from "react"
import { useAuthStore } from "../modules/auth/useAuthStore"

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        useAuthStore.getState().setAuth({ username: "", token: "" });
        router.push("/")
    }, [])
    return <div></div>
}
// 123aakash@