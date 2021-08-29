import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";

const operator = new OperatorExecutor({
    name: 'user:auth'
})

operator.setExecutor(async (server, client, payload) => {
    if (!payload.data.password || !payload.data.username) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })

    const user = await database.getUser(payload.data.username);
    if (!user) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })

    if (user.password !== payload.data.password) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })


    server.users.auth(payload.data.username, client);

    return operator.reply(client, payload, {
        success: true,
        user: {
            username: user.username,
            id: user.id,
            role: user.role
        }
    })
})
export default operator;