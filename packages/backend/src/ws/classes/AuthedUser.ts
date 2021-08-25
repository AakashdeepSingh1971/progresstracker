import { UserToken } from "../types";
import WebSocket from "isomorphic-ws";
import { UserRole } from "../../database/types";

export class AuthedUser {
    private _id: string;
    private _wsClient: { id: string; ws: WebSocket };
    private _username: string;
    private _role: UserRole;
    private _token?: UserToken | null;

    constructor(id: string, wsClient: { id: string; ws: WebSocket }) {
        this._id = id;
        this._wsClient = wsClient;
        this._role = UserRole.USER;
        this._username = "";

        this.fetch();
    }

    async fetch(files = false) {
        const user = await database.user.findUnique({ where: { id: this._id }, include: { token: true, files } })
        if (!user) return;
        this._id = user.id;
        this._role = user.role;
        this._username = user.username;
        this._role = user.role;
        this._token = user.token as UserToken;
    }


    get id(): string { return this._id }
    get wsClient(): { id: string; ws: WebSocket } { return this._wsClient }
    get role(): UserRole { return this._role }
    get username(): string { return this._username }
    get token(): UserToken | null | undefined { return this._token }


    data() {
        return {
            id: this._id,
            username: this._username,
            role: this._role,
            wsId: this._wsClient.id
        }
    }
}
