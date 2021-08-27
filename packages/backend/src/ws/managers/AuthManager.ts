import Collection from "@discordjs/collection";
import { AuthedUser } from "../classes/AuthedUser";
import WebSocket from "isomorphic-ws";
import { WebsocketServer } from "..";
import database from "../../database";

export class AuthManager {
    private _users: Collection<string, AuthedUser>;
    private _server: WebsocketServer;

    constructor(server: WebsocketServer) {
        this._users = new Collection<string, AuthedUser>();
        this._server = server;
    }

    auth(username: string, client: { id: string; ws: WebSocket }) {
        const user = new AuthedUser(username, client);
        this._users.set(client.id, user);

        const db = database.getDatabase();
        const ref = db.ref(`todos/${username}`)

        ref.on('child_added', (data) => {
            client.ws.send({
                op: 'todo:added',
                data: data.toJSON()
            });
        })

        ref.on('child_changed', (data) => {
            client.ws.send({
                op: 'todo:updated',
                data: data.toJSON()
            });
        })

        ref.on('child_removed', (data) => {
            client.ws.send({
                op: 'todo:deleted',
                data: data.toJSON()
            });
        })
    }

    deauth(wsId: string) {
        return this._users.delete(wsId);
    }

    getUserByWsId(wsId: string) {
        return this._users.get(wsId);
    }
}