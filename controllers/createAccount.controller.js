import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';
import { GenerateToken } from "../utils/GenerateToken.js";

export const createAccount = async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) res.json({ error: err });

        req.body.password = hash;
        await User.findOne({ email: req.body.email })
            .then(async user => {
                if (!user) {
                    await User.create(req.body)
                        .then(newUser => {
                            res.json({
                                message: 'Account created',
                                token: GenerateToken(newUser.get().id)
                            });
                        });
                } else {
                    res.json({
                        message: 'Account already exists',
                        token: GenerateToken(user.get().id)
                    });
                }
            });

    });
}