import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";

const operator = new OperatorExecutor({
    name: 'user:auth'
})

operator.setExecutor(async (server, client, payload) => {
    if (!payload.data.username) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Please provide all feilds'
    })

    const admin = server.users.getUserByWsId(client.id);
    if (!admin) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })

    const todos = await database.getUserTodos(admin.username, payload.data.username);
    if (!todos) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })

    return operator.reply(client, payload, {
        success: true,
        data: Object.values(todos)
    })
})
export default operator;