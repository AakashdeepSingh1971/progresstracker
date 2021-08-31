import WebSocket from "isomorphic-ws";
import { UserRole } from "../../database/types";
import database from "../../database";

export class AuthedUser {
    private _wsClient: { id: string; ws: WebSocket };
    private _username: string;
    private _role: UserRole;

    constructor(username: string, wsClient: { id: string; ws: WebSocket }) {
        this._wsClient = wsClient;
        this._role = UserRole.ADMINISTRATOR;
        this._username = username;

        this.fetch();
    }

    async fetch() {
        const user = await database.getUser(this._username)
        if (!user) return;
        this._role = user.role;
        this._username = user.username;
        this._role = user.role;
    }


    get wsClient(): { id: string; ws: WebSocket } { return this._wsClient }
    get role(): UserRole { return this._role }
    get username(): string { return this._username }


    data() {
        return {
            username: this._username,
            role: this._role,
            wsId: this._wsClient.id
        }
    }
}
