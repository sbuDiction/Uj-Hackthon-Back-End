// example

import { AuthenticateToken } from "../utils/AuthenticateToken.js";

export const auth = async (req, res, next) => {
    const { token } = req.body;

    const { userId } = AuthenticateToken(token);
    res.json({
        status: 'Token verified',
        client_id: userId
    })
}