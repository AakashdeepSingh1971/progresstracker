import { Connection } from "./connection";
import {
    ErrorResponse,
    GenericSuccessResponse,
    GetUsersResponse,
    GetUserTodosResponse,
    Todo,
    TodoTask,
    UserAuthResponse,

} from "./types";

type Handler<Data> = (data: Data) => void;

export type Wrapper = ReturnType<typeof wrap>;

export const wrap = (connection: Connection) => ({
    connection,
    query: {
        user: {
            auth: (username: string, password: string): Promise<UserAuthResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('user:auth', { username, password }).then((f) => {
                    resolve((f as UserAuthResponse | ErrorResponse))
                })
            }),
            getTodos: (username: string): Promise<GetUserTodosResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('user:get_todos', { username }).then((f) => {
                    resolve((f as GetUserTodosResponse | ErrorResponse))
                })
            }),
        },
        admin: {
            getUsers: (): Promise<GetUsersResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('user:get_todos', {}).then((f) => {
                    resolve((f as GetUsersResponse | ErrorResponse))
                })
            }),
        }
    },

    mutation: {
        user: {
            create: (username: string, password: string): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('user:create', { username, password }).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
        },
        todo: {
            create: (name: string, tasks: TodoTask[]): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('todo:create', { name, tasks }).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
            update: (id: string, name: string, tasks: TodoTask[]): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('todo:update', { id, name, tasks }).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
            delete: (id: string): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('todo:delete', { id }).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
        }
    },
    subscribe: {
        todo: {
            update: (handler: Handler<Todo>) =>
                connection.addListener("todo:updated", handler),
            added: (handler: Handler<Todo>) =>
                connection.addListener("todo:added", handler),
            deleted: (handler: Handler<{ id: string }>) =>
                connection.addListener("todo:deleted", handler),
        }
    }

})