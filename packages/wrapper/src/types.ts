export type Token = string;

export interface GenericSuccessResponse {
    success: true
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

export enum RoomUserRole {
    ADMINISTRATOR = 'ADMINISTRATOR',
    USER = 'USER'
}

