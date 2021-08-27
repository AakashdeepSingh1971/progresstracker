export interface User {
    id: string;
    username: string;
    role: UserRole;
    password: string;
}

export enum UserRole {
    ADMINISTRATOR = 'ADMINISTRATOR',
    USER = 'USER'
}

export type createUserOptions = {
    username: string;
    password: string;
}