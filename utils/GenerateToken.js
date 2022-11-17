import jwt from 'jsonwebtoken';
import config from '../config/config.json' assert {type: 'json'}

export const GenerateToken = (userId) => jwt.sign({ userId: userId }, config.TOKEN_LIFE, { expiresIn: config.TOKEN_LIFE });