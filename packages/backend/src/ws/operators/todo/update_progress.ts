import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";
import { CheckAuth } from "../../operatorMiddleware/checkAuth";

const operator = new OperatorExecutor({
    name: 'todo:update_progress'
})

operator.use(CheckAuth())

operator.setExecutor(async (server, client, payload) => {
    if (!payload.data.id || !payload.data.tasks) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Please provide all fields'
    })

    const user = server.users.getUserByWsId(client.id);
    if (!user) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })

    const success = await database.updateTodoProgress(user.username, payload.data.id, payload.data.tasks)

    return operator.reply(client, payload, {
        success
    })
})
export default operator;