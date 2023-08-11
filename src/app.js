import express from "express";
import conta from "./models/Conta.js";
import routes from "./routes/index.js"

const app = express();
app.use(express.json());

routes(app);

export default app;