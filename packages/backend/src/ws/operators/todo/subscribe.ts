import OperatorExecutor from "../../classes/OperatorExecutor";
import { CheckAuth } from "../../operatorMiddleware/checkAuth";

const operator = new OperatorExecutor({
    name: 'todo:subscribe'
})

operator.use(CheckAuth())

operator.setExecutor(async (server, client, payload) => {
    const user = server.users.getUserByWsId(client.id);
    if (!user) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })



    return operator.reply(client, payload, {
        success: user.subscribeTodos()
    })
})
export default operator;