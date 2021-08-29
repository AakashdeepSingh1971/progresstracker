import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";
import { CheckAuth } from "../../operatorMiddleware/checkAuth";
import { UserRole } from "../../../database/types";

const operator = new OperatorExecutor({
    name: 'admin:get_users'
})
operator.use(CheckAuth())
operator.setExecutor(async (server, client, payload) => {
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

    const users = await database.getUsers(admin.username);
    if (!users) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'No Users Found'
    })

    return operator.reply(client, payload, {
        success: true,
        data: Object.values(users)
    })
})
export default operator;