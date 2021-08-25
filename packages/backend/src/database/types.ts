export interface User {
    id: string;
    username: string;
    role: UserRole;
}

export enum UserRole {
    ADMINISTRATOR = 'ADMINISTRATOR',
    USER = 'USER'
}

export type createUserOptions = {
    username: string;
    password: string;
}