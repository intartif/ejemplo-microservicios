import express from "express";

const app = express();
const appid = process.env.APPID;
const port = process.env.PORT;

app.get('/', (req, res) => res.send(`${appid} Hola, te encuentras ejecutando tu primer microservicio`));

app.listen(port, () => console.info(`Estas escuchando desde nodo: ${appid}`));