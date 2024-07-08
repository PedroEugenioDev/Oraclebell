import { Router } from "express";
import {
  getAllShamans,
  getShamanByName,
} from "../controllers/shamanController";

const shamanRouter = Router();

shamanRouter.get("/shamans", getAllShamans);
shamanRouter.get("/shamans/:name", getShamanByName);

export default shamanRouter;
