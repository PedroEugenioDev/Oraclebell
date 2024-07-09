import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import shamanRouter from "./routes/shamanRouter";
import spiritRouter from "./routes/spiritRouter";
import animeRouter from "./routes/animeRouter";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", shamanRouter);
app.use("/api", spiritRouter);
app.use("/api", animeRouter);

app.get("/helloworld", function (request: Request, response: Response) {
  response.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running...`);
});
