import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";
import Password from "../../classes/Password";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const operator = new OperatorExecutor({
    name: 'user:create'
})

operator.setExecutor(async (server, client, payload) => {

    const JWT_SECRET = process.env.JWT_SECRET || ""

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

    const jti = uuidv4();

    const token = jwt.sign({
        jti,
        exp: Date.now() + 1296000000
    }, JWT_SECRET);

    const success = await database.createUser({ username: payload.data.username, password: Password.hash(payload.data.password), jti })
    return operator.reply(client, payload, {
        success,
        token,
    });
})

export default operator;