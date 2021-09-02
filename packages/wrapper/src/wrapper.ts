import { Connection } from "./connection";
import {
    ErrorResponse,
    GenericSuccessResponse,
    GetUsersResponse,
    GetUserTodosResponse,
    Todo,
    TodoTask,
    UserAuthResponse,
    UserCreateResponse,

} from "./types";

type Handler<Data> = (data: Data) => void;

export type Wrapper = ReturnType<typeof wrap>;

export const wrap = (connection: Connection) => ({
    connection,
    query: {
        user: {
            auth: (username: string, password?: string, token?: string): Promise<UserAuthResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('user:auth', { username, password, token }).then((f) => {
                    resolve((f as UserAuthResponse | ErrorResponse))
                })
            }),
            getTodos: (username: string): Promise<GetUserTodosResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('user:get_todos', { username }).then((f) => {
                    resolve((f as GetUserTodosResponse | ErrorResponse))
                })
            }),
        },
        todo: {
            subscribe: (): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('todo:subscribe', {}).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
        },
        admin: {
            getUsers: (): Promise<GetUsersResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('admin:get_users', {}).then((f) => {
                    resolve((f as GetUsersResponse | ErrorResponse))
                })
            }),
        }
    },

    mutation: {
        user: {
            create: (username: string, password: string): Promise<UserCreateResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('user:create', { username, password }).then((f) => {
                    resolve((f as UserCreateResponse | ErrorResponse))
                })
            }),
        },
        todo: {
            create: (username: string, name: string, tasks: TodoTask[]): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('todo:create', { username, name, tasks }).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
            update: (username: string, id: string, name: string, tasks: TodoTask[]): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('todo:update', { username, id, name, tasks }).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
            delete: (username: string, id: string): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('todo:delete', { username, id }).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
            updateProgress: (id: string, tasks: Array<{ taskId: string, completed: boolean }>): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
                connection.fetch('todo:update_progress', { id, tasks }).then((f) => {
                    resolve((f as GenericSuccessResponse | ErrorResponse))
                })
            }),
        }
    },
    subscribe: {
        todo: {
            update: (handler: Handler<{ op: string, data: Todo }>) =>
                connection.addListener("todo:updated", handler),
            added: (handler: Handler<{ op: string, data: Todo }>) =>
                connection.addListener("todo:added", handler),
            deleted: (handler: Handler<{ op: string, data: Todo }>) =>
                connection.addListener("todo:deleted", handler),
        }
    }

})