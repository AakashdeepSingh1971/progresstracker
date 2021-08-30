import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";
import { CheckAuth } from "../../operatorMiddleware/checkAuth";
import { UserRole } from "../../../database/types";
import { v4 as uuidv4 } from "uuid";

const operator = new OperatorExecutor({
    name: 'todo:create'
})

operator.use(CheckAuth())

operator.setExecutor(async (server, client, payload) => {
    if (!payload.data.name || !payload.data.tasks || !payload.data.username) return operator.reply(client, payload, {
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

    for (let index = 0; index < payload.data.tasks.length; index++) {
        const task = payload.data.tasks[index];
        task.id = uuidv4();
        payload.data.tasks[index] = task;
    }
    const success = await database.createTodo(admin.username, payload.data.username, payload.data.name, payload.data.tasks)

    return operator.reply(client, payload, {
        success
    })
})
export default operator;