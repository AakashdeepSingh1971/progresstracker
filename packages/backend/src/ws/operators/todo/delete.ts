import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";
import { CheckAuth } from "../../operatorMiddleware/checkAuth";

const operator = new OperatorExecutor({
    name: 'todo:delete'
})

operator.use(CheckAuth())

operator.setExecutor(async (server, client, payload) => {
    if (!payload.data.id || !payload.data.username) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Please provide all fields'
    })


    const admin = server.users.getUserByWsId(client.id);
    if (!admin) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })

    if (admin.role !== UserRole.ADMINISTRATOR) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })

    const success = await database.deleteTodo(admin.username, payload.data.username, payload.data.id)

    return operator.reply(client, payload, {
        success
    })
});

export default operator;