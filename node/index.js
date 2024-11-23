import express from "express";

import AuthRouter from "./auth/auth.routes.js";
import { config } from "dotenv";
import { connectDB } from "./config/db.config";

connectDB();
config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/auth", AuthRouter)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});