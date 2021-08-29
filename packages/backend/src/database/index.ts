import { Database } from "./Database";
import { config } from "dotenv";
config()
const database = new Database();

export default database;