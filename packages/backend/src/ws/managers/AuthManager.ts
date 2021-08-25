import Collection from "@discordjs/collection";
import { AuthedUser } from "../classes/AuthedUser";
import WebSocket from "isomorphic-ws";
import { WebsocketServer } from "..";

export class AuthManager {
    private _users: Collection<string, AuthedUser>;
    private _server: WebsocketServer;

    constructor(server: WebsocketServer) {
        this._users = new Collection<string, AuthedUser>();
        this._server = server;
    }

    auth(id: string, client: { id: string; ws: WebSocket }) {
        const user = new AuthedUser(id, client);
        this._users.set(client.id, user);
    }

    deauth(wsId: string) {
        return this._users.delete(wsId);
    }

    getUserByWsId(wsId: string) {
        return this._users.get(wsId);
    }
}