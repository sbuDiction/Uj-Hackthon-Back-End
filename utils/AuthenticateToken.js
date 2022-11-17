import jwt from 'jsonwebtoken';
import config from '../config/config.json' assert {type: 'json'}


export const AuthenticateToken = (token) => jwt.verify(token, config.TOKEN_LIFE);