import { Router } from "express";
import { getAllAnimes, getAnimeByTitle } from "../controllers/animeController";

const animeRouter = Router();

animeRouter.get("/animes", getAllAnimes);
animeRouter.get("/animes/:title", getAnimeByTitle);

export default animeRouter;
