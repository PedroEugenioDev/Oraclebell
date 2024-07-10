import { Router } from "express";
import { getAllMangas, getMangaByTitle } from "../controllers/mangaController";

const mangaRouter = Router();

mangaRouter.get("/mangas", getAllMangas);
mangaRouter.get("/mangas/:title", getMangaByTitle);

export default mangaRouter;
