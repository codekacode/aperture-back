import express, { Application } from 'express';

const app: Application = express();

app.get("/", (req, res) => {
    res.send("Hola aqui esta mi app")
})

export default app;