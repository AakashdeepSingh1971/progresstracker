import OperatorExecutor from "../../classes/OperatorExecutor";
import database from "../../../database";
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import Password from "../../classes/Password";

const operator = new OperatorExecutor({
    name: 'user:auth'
})

operator.setExecutor(async (server, client, payload) => {

    const JWT_SECRET = process.env.JWT_SECRET || ""

    if (!payload.data.username) return operator.reply(client, payload, {
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

    if (!payload.data.password && !payload.data.token) return operator.reply(client, payload, {
        success: false,
        code: 4001,
        error: 'Unauthorized'
    })

    if (payload.data.password) {
        if (user.password !== Password.hash(payload.data.password)) return operator.reply(client, payload, {
            success: false,
            code: 4001,
            error: 'Unauthorized'
        })
    }

    if (payload.data.token) {
        const token = jwt.verify(payload.data.token, JWT_SECRET)
        if (typeof token === "string") return operator.reply(client, payload, {
            success: false,
            code: 4001,
            error: 'Unauthorized'
        })
        if (user.jti !== token.jti) return operator.reply(client, payload, {
            success: false,
            code: 4001,
            error: 'Unauthorized'
        })
    }


    const jti = uuidv4();
    const token = jwt.sign({
        jti,
        exp: Date.now() + 1296000000
    }, JWT_SECRET);


    database.changeUserJTI(payload.data.username, jti);

    server.users.auth(payload.data.username, client);

    return operator.reply(client, payload, {
        success: true,
        user: {
            username: user.username,
            id: user.id,
            role: user.role
        },
        newToken: token
    })
})
export default operator;