import jwt from 'jsonwebtoken';
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const my_json_file = require("../config/config.json") // use the require method

export const GenerateToken = (userId) => jwt.sign({ userId: userId }, config.TOKEN_LIFE, { expiresIn: config.TOKEN_LIFE });