import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";

const operator = new OperatorExecutor({
    name: 'user:create'
})

operator.setExecutor(async (server, client, payload) => {
    const validUsername = /^[a-zA-Z0-9]+$/.test(payload.data.username);
    if (!validUsername) return operator.reply(client, payload, {
        success: false,
        code: 4000,
        error: 'Invalid Username'
    });


    const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(payload.data.password);
    if (!validPassword) return operator.reply(client, payload, {
        success: false,
        code: 4000,
        error: 'Password is weak'
    });

    const success = await database.createUser({ username: payload.data.username, password: payload.data.password })
    return operator.reply(client, payload, {
        success,
    });
})

export default operator;