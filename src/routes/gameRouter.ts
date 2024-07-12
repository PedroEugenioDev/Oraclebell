import { Router } from "express";
import { getAllGames, getGameByTitle } from "../controllers/gameController";

const gameRouter = Router();

gameRouter.get("/games", getAllGames);
gameRouter.get("/games/:title", getGameByTitle);

export default gameRouter;
