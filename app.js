import express from 'express';
import cors from 'cors';



import { projectManagementRoute } from './routes/projectManagement.routes.js';
import { taskManagementRoute } from './routes/taskManagement.routes.js';
import { projectMemberRoute } from './routes/projectMember.routes.js';
import { sequelize } from './database/init.js';
import { authRouter } from './routes/auth.routes.js';
import { createAccountRouter } from './routes/createAccount.routes.js';
import { userRouter } from './routes/user.routes.js';
import { usersRouter } from './routes/users.routes.js';



const app = express();

sequelize.sync().then(() => console.log('db ready'))

app.use(cors());
app.use(express.json());
app.use(
    projectManagementRoute,
    taskManagementRoute,
    projectMemberRoute,
    authRouter,
    createAccountRouter,
    userRouter,
    usersRouter
)

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ error: err.message });
});

app.use((req, res) => {
    res.status(404);
    res.send({ error: "Sorry, can't find that" });
});



const listener = app.listen(process.env.PORT || 5000, () => {
    console.log(`app running on port ${listener.address().port}`);
});