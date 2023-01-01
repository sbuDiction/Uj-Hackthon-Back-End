import jwt from 'jsonwebtoken';
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const my_json_file = require("../config/config.json") // use the require method
// import config from '../config/config.json' assert {type: 'json'}


export const AuthenticateToken = (token) => jwt.verify(token, config.TOKEN_LIFE);