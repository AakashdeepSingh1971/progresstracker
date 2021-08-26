import { config } from "dotenv";
import { WebsocketServer } from './ws/index';

config();

const WS_PORT = Number(process.env.WS_PORT || 8443);

async function main() {

    const wss = new WebsocketServer(WS_PORT);

}

main();