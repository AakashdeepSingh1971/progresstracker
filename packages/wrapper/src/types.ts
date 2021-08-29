export type Token = string;

export interface GenericSuccessResponse {
    success: true
}

export interface UserAuthResponse {
    success: true,
    user: {
        username: string,
        id: string,
        role: UserRole
    }
}

export interface GetUserTodosResponse {
    success: true,
    data: Todo[]
}

export interface ErrorResponse {
    success: false,
    error: string,
    code: number
}

export interface TodoTask {
    name: string;
    completed: boolean;
}

export interface Todo {
    name: string,
    id: string,
    tasks: TodoTask[]
}

export enum UserRole {
    ADMINISTRATOR = 'ADMINISTRATOR',
    USER = 'USER'
}

