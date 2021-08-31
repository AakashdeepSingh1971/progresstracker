import create from "zustand";
import { combine } from "zustand/middleware";
import { isServer } from "../../lib/constants";

const passwordKey = "@auth/password";
const usernameKey = "@auth/username";

const getDefaultValues = () => {
    if (!isServer) {
        try {
            return {
                password: localStorage.getItem(passwordKey) || "",
                username: localStorage.getItem(usernameKey) || "",
            };
        } catch { }
    }

    return {
        password: "",
        username: ""
    };
};

export const useAuthStore = create(
    combine(getDefaultValues(), (set) => ({
        setPassword: (x: { password: string, }) => {
            try {
                localStorage.setItem(passwordKey, x.password);
            } catch { }

            set(x);
        },
        setUsername: (x: { username: string }) => {
            try {
                localStorage.setItem(usernameKey, x.username);
            } catch { }

            set(x);
        },
        setAuth: (x: { password: string, username: string }) => {
            try {
                localStorage.setItem(passwordKey, x.password);
                localStorage.setItem(usernameKey, x.username);
            } catch { }

            set(x);
        },
    }))
);