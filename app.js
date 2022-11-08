import express from 'express';
import cors from 'cors';



const app = express();

app.use(cors());
app.use(express.json());

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