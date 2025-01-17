import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import shamanRouter from "./routes/shamanRouter";
import spiritRouter from "./routes/spiritRouter";
import animeRouter from "./routes/animeRouter";
import mangaRouter from "./routes/mangaRouter";
import toolRouter from "./routes/toolRouter";
import gameRouter from "./routes/gameRouter";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", shamanRouter);
app.use("/api", spiritRouter);
app.use("/api", animeRouter);
app.use("/api", mangaRouter);
app.use("/api", toolRouter);
app.use("/api", gameRouter);

app.get("/api", function (request: Request, response: Response) {
  response.send("Welcome to Oraclebell, the Shaman King API");
});

app.listen(PORT, () => {
  console.log(`Server running...`);
});
